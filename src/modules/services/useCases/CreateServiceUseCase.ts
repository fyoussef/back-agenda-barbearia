import { prisma } from "../../../database/prismaClient"

interface ICreateService {
    name: string
    duration: number
    price: number
}

export class CreateServiceUseCase {
    async execute({ name, duration, price }: ICreateService) {
        
        const serviceExist = await prisma.service.findFirst({
            where: {
                name: {
                    equals: name,
                    mode: 'insensitive'
                }
            }
        })

        if (serviceExist) {
            throw new Error('Este serviço já existe')
        }

        await prisma.service.create({
            data: {
                name, duration, price
            }
        })
        
    }
}