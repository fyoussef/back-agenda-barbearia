import { Request, Response } from "express";
import { IReservation } from "../interfaces/IReservation";
import { CreateReservationUseCase } from "./CreateReservationUseCase";


export class CreateReservationController {

    async handle(req: Request, res: Response) {

        const {
            name,
            duration,
            end_booking,
            start_booking,
            services,
            email,
            phone
        }: IReservation = req.body

        const createReservationUseCase = new CreateReservationUseCase()

        await createReservationUseCase.execute({
            name,
            duration,
            end_booking,
            start_booking,
            services,
            email,
            phone
        })

        return res.status(201).json({
            message: 'Horário agendado com sucesso'
        })

    }

}