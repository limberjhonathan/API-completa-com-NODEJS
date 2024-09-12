import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomerService } from "../services/ListcustomersService";

class ListCustomersController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listCustomerService = new ListCustomerService();

        const customers = await listCustomerService.executa();

        reply.send(customers)
    }
}

export { ListCustomersController }