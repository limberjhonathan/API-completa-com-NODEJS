import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCustomerService } from "../services/DeleteCustomersService";

class DeletadoCustomerController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { id } = request.query as {id: string }

        const customerService = new DeleteCustomerService()

        const customer = await customerService.execute({ id })

        reply.send(customer)
    }
}

export { DeletadoCustomerController }