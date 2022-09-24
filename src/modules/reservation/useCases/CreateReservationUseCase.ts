import { prisma } from "../../../database/prismaClient"
import { FindClient } from "../../clients/useCases/FindClient"
import { IReservation } from "../interfaces/IReservation";
import { FindService } from "./FindService"

export class CreateReservationUseCase {

    async execute({
        name,
        phone,
        email,
        duration,
        services,
        start_booking,
        end_booking
    }: IReservation) {


        const { findByName, findByNameAndPhone } = new FindClient();
        const { findByName: findServiceByName } = new FindService()

        const clientAlreadyExists = phone ? await findByNameAndPhone(name, phone) : await findByName(name)

        const client = clientAlreadyExists ? clientAlreadyExists : await prisma.client.create({
            data: {
                name, 
                phone: phone ?? null
            }
        })
 
        const service = await findServiceByName(services)

        const data = service.map(service => {
            return {
                start_booking,
                end_booking,
                id_client: client.id,
                id_service: service.id
            }
        })

        await prisma.reservation.createMany({
            data: data
        })

    }

}