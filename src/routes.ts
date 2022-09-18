import { Router } from 'express'
import { CreateClientController } from './modules/clients/useCases/CreateClientController'
import { CreateSchedulesController } from './modules/hours/useCases/CreateSchedulesController'
import { GetSchedulesController } from './modules/hours/useCases/GetSchedulesController'
import { CreateReservationController } from './modules/reservation/useCases/CreateReservationController'
import { CreateServiceController } from './modules/services/useCases/CreateServiceController'

const routes = Router()

const createClientController = new CreateClientController()
const getSchedulesController = new GetSchedulesController()
const createSchedulesController = new CreateSchedulesController()
const createServiceController = new CreateServiceController()
const createReservationController = new CreateReservationController()

routes.post('/user', createClientController.handle)

routes.get('/hours', getSchedulesController.handle)
/* routes.post('/schedules', createSchedulesController.handle) */

routes.post('/service', createServiceController.handle)

routes.post('/reservation', createReservationController.handle)


export { routes }