import fastifyCors from "@fastify/cors";
import { fastify } from "fastify";
import { dashboardRoutes } from "./modules/dashboard/dashboard.routes";
import { salesRoutes } from "./modules/sales/sales.routes";

export function buildApp() {
    const app = fastify({
        logger: false,
    });

    app.register(fastifyCors, {
        origin: true,
        // methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    });

    app.get("/ping", async (_request, reply) => {
        reply.send({ message: "pong" });
    });

    app.register(salesRoutes, { prefix: "/sales" });
    app.register(dashboardRoutes, { prefix: "/dashboard" });

    return app;
}