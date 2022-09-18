export interface IReservation {
    name: string
    phone?: string
    email?: string
    duration: number
    services: string[]
    start_booking: string
    end_booking: string
}