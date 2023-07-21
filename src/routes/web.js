import express from "express";
import homeController from "../controllers/HomeController.js";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.post("/webhook", homeController.postWebhook);
  router.get("/webhook", homeController.getWebhook);
  router.post("/webhookZalo", homeController.handleIncomingMessageZalo);
  return app.use("/", router);
};

export default initWebRoutes;
