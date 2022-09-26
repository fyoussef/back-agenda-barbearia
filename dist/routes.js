"use strict";
exports.__esModule = true;
var express_1 = require("express");
var CreateClientController_1 = require("./modules/clients/useCases/CreateClientController");
var CreateSchedulesController_1 = require("./modules/hours/useCases/CreateSchedulesController");
var GetSchedulesController_1 = require("./modules/hours/useCases/GetSchedulesController");
var CreateReservationController_1 = require("./modules/reservation/useCases/CreateReservationController");
var CreateServiceController_1 = require("./modules/services/useCases/CreateServiceController");
var routes = express_1.Router();
exports.routes = routes;
var createClientController = new CreateClientController_1.CreateClientController();
var getSchedulesController = new GetSchedulesController_1.GetSchedulesController();
var createSchedulesController = new CreateSchedulesController_1.CreateSchedulesController();
var createServiceController = new CreateServiceController_1.CreateServiceController();
var createReservationController = new CreateReservationController_1.CreateReservationController();
routes.post('/user', createClientController.handle);
routes.get('/hours', getSchedulesController.handle);
/* routes.post('/schedules', createSchedulesController.handle) */
routes.post('/service', createServiceController.handle);
routes.post('/reservation', createReservationController.handle);
//# sourceMappingURL=routes.js.map