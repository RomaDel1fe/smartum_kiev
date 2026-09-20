import { Controller, Get } from "@nestjs/common";
import { healthResponseSchema, type HealthResponse } from "@smartum/contracts";

@Controller("health")
export class HealthController {
  @Get()
  getHealth(): HealthResponse {
    return healthResponseSchema.parse({ status: "ok", service: "smartum-api" });
  }
}
