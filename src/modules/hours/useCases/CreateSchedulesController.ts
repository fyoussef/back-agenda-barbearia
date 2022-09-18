import { Request, Response } from "express";
import { CreateSchedulesUseCase } from "./CreateSchedulesUseCase";


export class CreateSchedulesController {
    async handle(req: Request, res: Response) {
        const createSchedulesUseCase = new CreateSchedulesUseCase()

        await createSchedulesUseCase.execute()

        return res.status(200).json({
            mesage: 'Created'
        })
    }
}