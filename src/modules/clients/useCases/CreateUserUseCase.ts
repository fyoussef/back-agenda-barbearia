import { prisma } from "../../../database/prismaClient"

interface ICreateUser {
    name: string
    phone: string
    email?: string
}

export class CreateUserUseCase {

    async execute({ name, phone, email }: ICreateUser) {

        const userExists = await prisma.user.findFirst({
            where: {
                name: {
                    equals: name,
                    mode: "insensitive"
                },
                phone: {
                    equals: phone
                }
            }
        })

        if (userExists) {
            throw new Error('O Cliente já existe')
        }

        const user = await prisma.user.create({
            data: {
                name, 
                phone, 
                email: email ?? null
            }
        })

    }

}