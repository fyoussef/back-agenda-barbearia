import { prisma } from "../../../database/prismaClient";


export class GetSchedulesUseCase {
 
    async execute() {
        const schedules = await prisma.schedules.findMany()

        return schedules
    }
    
}