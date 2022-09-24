import { prisma } from "../../../database/prismaClient";


export class FindService {

    async findByName(services: string[]) {

        const service = await prisma.service.findMany({
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