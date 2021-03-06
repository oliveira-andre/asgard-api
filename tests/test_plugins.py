# encoding: utf-8

import json
import unittest

import mock

from hollowman import plugins
from hollowman.app import application
from hollowman.plugins import register_plugin


class PluginEndpointTest(unittest.TestCase):
    def test_return_only_registered_plugins_empty(self):
        with mock.patch.multiple(plugins, PLUGIN_REGISTRY={}):
            response = application.test_client().get("/v2/plugins")
            self.assertDictEqual({"plugins": []}, json.loads(response.data))

    def test_return_only_registered_plugins_not_empty(self):
        plugin_registry = {
            "some-example-plugin": {
                "id": "some-example-plugin",
                "info": {"modules": ["ui"]},
            }
        }
        plugin_data = {"plugins": [plugin_registry["some-example-plugin"]]}
        with mock.patch.multiple(plugins, PLUGIN_REGISTRY=plugin_registry):
            response = application.test_client().get("/v2/plugins")
            self.assertDictEqual(plugin_data, json.loads(response.data))

    def test_redirect_to_right_main_js(self):
        response = application.test_client().get(
            "/v2/plugins/some-plugin/main.js"
        )
        self.assertEqual(302, response.status_code)
        self.assertEqual(
            "http://localhost/static/plugins/some-plugin/main.js",
            response.headers["Location"],
        )

    def test_register_one_plugin(self):
        plugin_registry = {
            "check-expired-session-plugin": {
                "id": "check-expired-session-plugin",
                "info": {"modules": ["ui"]},
            }
        }
        with mock.patch.multiple(plugins, PLUGIN_REGISTRY={}):
            register_plugin("check-expired-session-plugin")
            self.assertDictEqual(plugin_registry, plugins.PLUGIN_REGISTRY)

    def test_register_multiple_plugin(self):
        plugin_registry = {
            "check-expired-session-plugin": {
                "id": "check-expired-session-plugin",
                "info": {"modules": ["ui"]},
            },
            "colapse-sidebar-plugin": {
                "id": "colapse-sidebar-plugin",
                "info": {"modules": ["ui"]},
            },
        }
        with mock.patch.multiple(plugins, PLUGIN_REGISTRY={}):
            register_plugin("check-expired-session-plugin")
            register_plugin("colapse-sidebar-plugin")
            self.assertDictEqual(plugin_registry, plugins.PLUGIN_REGISTRY)

    @unittest.skip("Será feito quando tivermos permissoes implementadas")
    def test_deny_plugin_if_permissions_are_isuficient(self):
        self.fail()
