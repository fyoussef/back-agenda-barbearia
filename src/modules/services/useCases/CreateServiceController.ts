import { Request, Response } from "express";
import { CreateServiceUseCase } from "./CreateServiceUseCase";


export class CreateServiceController {

    async handle(req: Request, res: Response) {

        const { name, duration, price } = req.body

        const createServiceUseCase = new CreateServiceUseCase();

        await createServiceUseCase.execute({
            name, duration, price
        })

        return res.status(200).json({
            message: 'Serviço criado com sucesso'
        })

    }

}