import prismaClient from "../prisma";

class ListCustomerService{
    async executa(){

        const customer = await prismaClient.customer.findMany()

        return customer
    }
}

export { ListCustomerService }