import { Request, Response } from "express";
import { GetSchedulesUseCase } from "./GetSchedulesUseCase";


export class GetSchedulesController {
    async handle(req: Request, res: Response) {

        const getSchedulesUseCase = new GetSchedulesUseCase();

        const schedules = await getSchedulesUseCase.execute()

        return res.status(200).json({
            schedules
        })

    }
}