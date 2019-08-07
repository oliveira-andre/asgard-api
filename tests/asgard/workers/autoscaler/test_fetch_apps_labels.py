from aioresponses import aioresponses
from asynctest import TestCase

from asgard.conf import settings
from asgard.workers.autoscaler.cloudinterface import AsgardInterface


class TestFetchAppsLabels (TestCase):

    async def test_everything_should_be_scaled_all_apps(self):
        interface = AsgardInterface()

        with aioresponses() as rsps:
            rsps.get(
                f"{settings.ASGARD_API_ADDRESS}/v2/apps",
                status=200,
                payload=[
                    {
                        "id": "/test_app",
                        "cpu": "0.1",
                        "mem": "0.2",
                        "labels": {
                            "asgard.autoscale.cpu": "0.2",
                            "asgard.autoscale.mem": "0.2"
                        }
                    },
                    {
                        "id": "/test_app2",
                        "cpu": "0.1",
                        "mem": "0.2",
                        "labels": {
                            "asgard.autoscale.cpu": "0.2",
                            "asgard.autoscale.mem": "0.2"
                        }
                    },
                    {
                        "id": "/test_app3",
                        "cpu": "0.1",
                        "mem": "0.2",
                        "labels": {
                            "asgard.autoscale.cpu": "0.2",
                            "asgard.autoscale.mem": "0.2"
                        }
                    }
                ],
            )

            apps = await interface.fetch_all_apps()

        self.assertEqual(3, len(apps))

        for i in range(3):
            self.assertEqual(True, apps[i].is_set_to_scale())
            self.assertEqual(True, apps[i].is_set_to_scale_cpu())
            self.assertEqual(True, apps[i].is_set_to_scale_mem())

    async def test_nothing_should_be_scaled_missing_labels(self):
        interface = AsgardInterface()

        with aioresponses() as rsps:
            rsps.get(
                f"{settings.ASGARD_API_ADDRESS}/v2/apps",
                status=200,
                payload=[
                    {
                        "id": "/test_app",
                        "cpu": "0.1",
                        "mem": "0.2",
                        "labels": None
                    },
                    {
                        "id": "/test_app2",
                        "cpu": "0.1",
                        "mem": "0.2",
                        "labels": None
                    },
                    {
                        "id": "/test_app3",
                        "cpu": "0.1",
                        "mem": "0.2",
                        "labels": None
                    }
                ],
            )

            apps = await interface.fetch_all_apps()

        self.assertEqual(3, len(apps))

        for i in range(3):
            self.assertEqual(False, apps[i].is_set_to_scale())
            self.assertEqual(False, apps[i].is_set_to_scale_cpu())
            self.assertEqual(False, apps[i].is_set_to_scale_mem())

    async def nothing_should_be_scaled_all_ignored(self):
        interface = AsgardInterface()

        with aioresponses() as rsps:
            rsps.get(
                f"{settings.ASGARD_API_ADDRESS}/v2/apps",
                status=200,
                payload=[
                    {
                        "id": "/test_app",
                        "cpu": "0.1",
                        "mem": "0.2",
                        "labels": {
                            "asgard.autoscale.ignore": "all"
                        }
                    },
                    {
                        "id": "/test_app2",
                        "cpu": "0.1",
                        "mem": "0.2",
                        "labels": {
                            "asgard.autoscale.ignore": "all"
                        }
                    },
                    {
                        "id": "/test_app3",
                        "cpu": "0.1",
                        "mem": "0.2",
                        "labels": {
                            "asgard.autoscale.ignore": "all"
                        }
                    }
                ],
            )

            apps = await interface.fetch_all_apps()

        self.assertEqual(3, len(apps))

        for i in range(3):
            self.assertEqual(False, apps[i].is_set_to_scale())
            self.assertEqual(False, apps[i].is_set_to_scale_cpu())
            self.assertEqual(False, apps[i].is_set_to_scale_mem())

    async def nothing_should_be_scaled_all_individually_ignored(self):
        interface = AsgardInterface()

        with aioresponses() as rsps:
            rsps.get(
                f"{settings.ASGARD_API_ADDRESS}/v2/apps",
                status=200,
                payload=[
                    {
                        "id": "/test_app",
                        "cpu": "0.1",
                        "mem": "0.2",
                        "labels": {
                            "asgard.autoscale.ignore": "cpu;mem"
                        }
                    },
                    {
                        "id": "/test_app2",
                        "cpu": "0.1",
                        "mem": "0.2",
                        "labels": {
                            "asgard.autoscale.ignore": "cpu;mem"
                        }
                    },
                    {
                        "id": "/test_app3",
                        "cpu": "0.1",
                        "mem": "0.2",
                        "labels": {
                            "asgard.autoscale.ignore": "cpu;mem"
                        }
                    }
                ],
            )

            apps = await interface.fetch_all_apps()

        self.assertEqual(3, len(apps))

        for i in range(3):
            self.assertEqual(False, apps[i].is_set_to_scale())
            self.assertEqual(False, apps[i].is_set_to_scale_cpu())
            self.assertEqual(False, apps[i].is_set_to_scale_mem())

    async def test_only_cpu_should_not_be_scaled_missing_label(self):
        interface = AsgardInterface()

        with aioresponses() as rsps:
            rsps.get(
                f"{settings.ASGARD_API_ADDRESS}/v2/apps",
                status=200,
                payload=[
                    {
                        "id": "/test_app",
                        "cpu": "0.1",
                        "mem": "0.2",
                        "labels": {
                            "asgard.autoscale.mem": "0.2"
                        }
                    },
                    {
                        "id": "/test_app2",
                        "cpu": "0.1",
                        "mem": "0.2",
                        "labels": {
                            "asgard.autoscale.cpu": "0.2",
                            "asgard.autoscale.mem": "0.2"
                        }
                    },
                    {
                        "id": "/test_app3",
                        "cpu": "0.1",
                        "mem": "0.2",
                        "labels": {
                            "asgard.autoscale.cpu": "0.2",
                            "asgard.autoscale.mem": "0.2"
                        }
                    }
                ],
            )

            apps = await interface.fetch_all_apps()

        self.assertEqual(3, len(apps))

        self.assertEqual(True, apps[0].is_set_to_scale())
        self.assertEqual(False, apps[0].is_set_to_scale_cpu())
        self.assertEqual(True, apps[0].is_set_to_scale_mem())

        for i in range(1, 3):
            self.assertEqual(True, apps[i].is_set_to_scale())
            self.assertEqual(True, apps[i].is_set_to_scale_cpu())
            self.assertEqual(True, apps[i].is_set_to_scale_mem())

    async def test_only_cpu_should_not_be_scaled_cpu_ignored(self):
        interface = AsgardInterface()

        with aioresponses() as rsps:
            rsps.get(
                f"{settings.ASGARD_API_ADDRESS}/v2/apps",
                status=200,
                payload=[
                    {
                        "id": "/test_app",
                        "mem": "0.2",
                        "cpu": "0.4",
                        "labels": {
                            "asgard.autoscale.cpu": "0.2",
                            "asgard.autoscale.mem": "0.2"
                        }
                    },
                    {
                        "id": "/test_app2",
                        "cpu": "0.1",
                        "mem": "0.2",
                        "labels": {
                            "asgard.autoscale.cpu": "0.2",
                            "asgard.autoscale.mem": "0.2",
                            "asgard.autoscale.ignore": "cpu"
                        }
                    },
                    {
                        "id": "/test_app3",
                        "cpu": "0.1",
                        "mem": "0.2",
                        "labels": {
                            "asgard.autoscale.cpu": "0.2",
                            "asgard.autoscale.mem": "0.2"
                        }
                    }
                ],
            )

            apps = await interface.fetch_all_apps()

        self.assertEqual(3, len(apps))

        self.assertEqual(True, apps[0].is_set_to_scale())
        self.assertEqual(True, apps[0].is_set_to_scale_cpu())
        self.assertEqual(True, apps[0].is_set_to_scale_mem())

        self.assertEqual(True, apps[1].is_set_to_scale())
        self.assertEqual(False, apps[1].is_set_to_scale_cpu())
        self.assertEqual(True, apps[1].is_set_to_scale_mem())

        self.assertEqual(True, apps[2].is_set_to_scale())
        self.assertEqual(True, apps[2].is_set_to_scale_cpu())
        self.assertEqual(True, apps[2].is_set_to_scale_mem())

    async def test_only_mem_should_not_be_scaled_missing_label(self):
        interface = AsgardInterface()

        with aioresponses() as rsps:
            rsps.get(
                f"{settings.ASGARD_API_ADDRESS}/v2/apps",
                status=200,
                payload=[
                    {
                        "id": "/test_app",
                        "mem": "0.2",
                        "cpu": "0.5",
                        "labels": {
                            "asgard.autoscale.cpu": "0.2",
                            "asgard.autoscale.mem": "0.2"
                        }
                    },
                    {
                        "id": "/test_app2",
                        "cpu": "0.1",
                        "mem": "0.2",
                        "labels": {
                            "asgard.autoscale.cpu": "0.2",
                            "asgard.autoscale.mem": "0.2"
                        }
                    },
                    {
                        "id": "/test_app3",
                        "cpu": "0.1",
                        "mem": "0.1",
                        "labels": {
                            "asgard.autoscale.cpu": "0.2",
                        }
                    }
                ],
            )

            apps = await interface.fetch_all_apps()

        self.assertEqual(3, len(apps))

        self.assertEqual(True, apps[2].is_set_to_scale())
        self.assertEqual(True, apps[2].is_set_to_scale_cpu())
        self.assertEqual(False, apps[2].is_set_to_scale_mem())

        for i in range(2):
            self.assertEqual(True, apps[i].is_set_to_scale())
            self.assertEqual(True, apps[i].is_set_to_scale_cpu())
            self.assertEqual(True, apps[i].is_set_to_scale_mem())

    async def test_only_mem_should_not_be_scaled_mem_ignored(self):
        interface = AsgardInterface()

        with aioresponses() as rsps:
            rsps.get(
                f"{settings.ASGARD_API_ADDRESS}/v2/apps",
                status=200,
                payload=[
                    {
                        "id": "/test_app",
                        "mem": "0.2",
                        "cpu": "0.5",
                        "labels": {
                            "asgard.autoscale.cpu": "0.2",
                            "asgard.autoscale.mem": "0.2"
                        }
                    },
                    {
                        "id": "/test_app2",
                        "cpu": "0.1",
                        "mem": "0.2",
                        "labels": {
                            "asgard.autoscale.cpu": "0.2",
                            "asgard.autoscale.mem": "0.2",
                            "asgard.autoscale.ignore": "mem"
                        }
                    },
                    {
                        "id": "/test_app3",
                        "cpu": "0.1",
                        "mem": "0.6",
                        "labels": {
                            "asgard.autoscale.cpu": "0.2",
                            "asgard.autoscale.mem": "0.2"
                        }
                    }
                ],
            )

            apps = await interface.fetch_all_apps()

        self.assertEqual(3, len(apps))

        self.assertEqual(True, apps[0].is_set_to_scale())
        self.assertEqual(True, apps[0].is_set_to_scale_cpu())
        self.assertEqual(True, apps[0].is_set_to_scale_mem())

        self.assertEqual(True, apps[1].is_set_to_scale())
        self.assertEqual(True, apps[1].is_set_to_scale_cpu())
        self.assertEqual(False, apps[1].is_set_to_scale_mem())

        self.assertEqual(True, apps[2].is_set_to_scale())
        self.assertEqual(True, apps[2].is_set_to_scale_cpu())
        self.assertEqual(True, apps[2].is_set_to_scale_mem())