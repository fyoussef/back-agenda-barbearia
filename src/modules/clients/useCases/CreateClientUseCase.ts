import { prisma } from "../../../database/prismaClient"
import { ICreateClient } from "../interfaces/ICreateClient"
import { FindClient } from "./FindClient"

export class CreateClientUseCase {

    async execute({ name, phone, email }: ICreateClient) {

        const { findByNameAndPhone, findByName } = new FindClient()

        const clientExists = phone ? await findByNameAndPhone(name, phone) : await findByName(name)

        if (clientExists) {
            throw new Error('O Cliente já existe')
        }

        await prisma.client.create({
            data: {
                name, 
                phone: phone ?? null,
                email: email ?? null
            }
        })

    }

}