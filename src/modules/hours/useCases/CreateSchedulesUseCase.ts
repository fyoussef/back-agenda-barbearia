import { prisma } from "../../../database/prismaClient";

export class CreateSchedulesUseCase {
    async execute() {
        
        await prisma.schedules.createMany({
            data: [
                {hour: '09:00'},
                {hour: '09:30'},
                {hour: '10:00'},
                {hour: '10:30'},
                {hour: '11:00'},
                {hour: '11:30'},
                {hour: '14:00'},
                {hour: '14:30'},
                {hour: '15:00'},
                {hour: '15:30'},
                {hour: '16:00'},
                {hour: '16:30'},
                {hour: '17:00'},
                {hour: '17:30'},
                {hour: '18:00'},
                {hour: '18:30'}
            ]
        })

    }
}