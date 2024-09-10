import { FastifyInstance, FastifyRequest, FastifyReply, FastifyPluginOptions } from "fastify";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { message: "Rota de teste funcionando!" };
    });
}
