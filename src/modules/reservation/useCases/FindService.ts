import { prisma } from "../../../database/prismaClient";


export class FindService {
/* 
    async findByName(name: string) {

        const service = await prisma.service.findFirst({
            where: {
                name: {
                    equals: name,
                    mode: 'insensitive'
                }
            }
        })

        return service

    } */

    async findByName(services: string[]) {

        const service = prisma.service.findMany({
            where: {
                name: {
                    in: services,
                    mode: 'insensitive'
                }
            }
        })

        return service

    }

}