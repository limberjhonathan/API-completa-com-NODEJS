import { FastifyInstance, FastifyRequest, FastifyReply, FastifyPluginOptions } from "fastify";
import { CreateCustomerController } from "./controllers/CreateCustomersController";
import { ListCustomersController } from "./controllers/ListCustomersController";
import { DeletadoCustomerController } from "./controllers/DeleteCustomersController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { message: "Rota de teste funcionando!" };
    });

    fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(request, reply);
    });

    fastify.get("/customers", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomersController().handle(request, reply);
    });

    fastify.delete("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeletadoCustomerController().handle(request, reply);
    });
}
