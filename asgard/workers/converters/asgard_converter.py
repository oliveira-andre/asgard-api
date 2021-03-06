from typing import Optional

from asgard.clients.apps.dtos.app_dto import AppDto
from asgard.clients.apps.dtos.app_stats_dto import AppStatsDto
from asgard.clients.apps.dtos.decision_dto import DecisionDto
from asgard.workers.models.app_stats import AppStats
from asgard.workers.models.decision import Decision
from asgard.workers.models.scalable_app import ScalableApp

from .converter_interface import Converter


class AppConverter(Converter[ScalableApp, AppDto]):
    @classmethod
    def to_model(cls, dto_object: AppDto) -> ScalableApp:
        if dto_object.id[0] == "/":
            appid = dto_object.id[1:]
        else:
            appid = dto_object.id

        scalable_app = ScalableApp(appid)

        scalable_app.cpu_allocated = dto_object.cpus
        scalable_app.mem_allocated = dto_object.mem

        if dto_object.labels is not None:
            if "asgard.autoscale.cpu" in dto_object.labels:
                scalable_app.cpu_threshold = float(
                    dto_object.labels["asgard.autoscale.cpu"]
                )

            if "asgard.autoscale.mem" in dto_object.labels:
                scalable_app.mem_threshold = float(
                    dto_object.labels["asgard.autoscale.mem"]
                )

            if "asgard.autoscale.ignore" in dto_object.labels:
                if "all" in dto_object.labels["asgard.autoscale.ignore"]:
                    scalable_app.cpu_threshold = None
                    scalable_app.mem_threshold = None
                else:
                    if "cpu" in dto_object.labels["asgard.autoscale.ignore"]:
                        scalable_app.cpu_threshold = None
                    if "mem" in dto_object.labels["asgard.autoscale.ignore"]:
                        scalable_app.mem_threshold = None

            if "asgard.autoscale.max_cpu_limit" in dto_object.labels:
                scalable_app.max_cpu_scale_limit = float(
                    dto_object.labels["asgard.autoscale.max_cpu_limit"]
                )
            if "asgard.autoscale.min_cpu_limit" in dto_object.labels:
                scalable_app.min_cpu_scale_limit = float(
                    dto_object.labels["asgard.autoscale.min_cpu_limit"]
                )
            if "asgard.autoscale.max_mem_limit" in dto_object.labels:
                scalable_app.max_mem_scale_limit = float(
                    dto_object.labels["asgard.autoscale.max_mem_limit"]
                )
            if "asgard.autoscale.min_mem_limit" in dto_object.labels:
                scalable_app.min_mem_scale_limit = float(
                    dto_object.labels["asgard.autoscale.min_mem_limit"]
                )

        return scalable_app

    @classmethod
    def to_dto(cls, model_object: ScalableApp) -> AppDto:
        # conversao nao necessaria
        raise NotImplementedError


class AppStatsConverter(Converter[AppStats, AppStatsDto]):
    @classmethod
    def to_model(cls, dto_object: AppStatsDto) -> Optional[AppStats]:

        if dto_object.was_not_found():
            return None

        app_stats = AppStats()
        app_stats.cpu_usage = float(dto_object.stats.cpu_pct) / 100
        app_stats.mem_usage = float(dto_object.stats.ram_pct) / 100

        return app_stats

    @classmethod
    def to_dto(cls, model_object: AppStats) -> AppStatsDto:
        # conversao nao necessaria
        raise NotImplementedError


class DecisionConverter(Converter[Decision, DecisionDto]):
    @classmethod
    def to_model(cls, dto_object: DecisionDto) -> Decision:
        # conversao nao necessaria
        raise NotImplementedError

    @classmethod
    def to_dto(cls, model_object: Decision) -> DecisionDto:
        dto_object = DecisionDto(
            id=model_object.id, cpus=model_object.cpu, mem=model_object.mem
        )

        return dto_object
