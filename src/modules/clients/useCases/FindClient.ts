import { prisma } from "../../../database/prismaClient";


export class FindClient {

    async findByName(name: string) {

        const client = await prisma.client.findFirst({
            where: {
                name: {
                    equals: name,
                    mode: 'insensitive'
                }
            }
        })

        return client

    }

    async findByNameAndPhone(name: string, phone: string) {

        const client = await prisma.client.findFirst({
            where: {
                name: {
                    equals: name,
                    mode: 'insensitive'
                },
                phone: {
                    equals: phone
                }
            }
        })

        return client
    }

}