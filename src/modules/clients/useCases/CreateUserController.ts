import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";


export class CreateUserController {

    async handle(req: Request, res: Response) {

        const { name, phone, email } = req.body

        const createUser = new CreateUserUseCase()       

        const result = await createUser.execute({ name, phone, email })

        return res.json(result)
    }

}