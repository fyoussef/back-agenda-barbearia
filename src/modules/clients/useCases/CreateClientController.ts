import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUseCase";


export class CreateClientController {

    async handle(req: Request, res: Response) {

        const { name, phone, email } = req.body

        const createClient = new CreateClientUseCase()       

        const result = await createClient.execute({ name, phone, email })

        return res.json(result)
    }

}