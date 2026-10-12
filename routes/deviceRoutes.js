import express from "express";
import { deviceController } from "../controllers/deviceController.js";
const router = express.Router();

router.get("/devices", deviceController.all);
router.post("/devices" , deviceController.insert);
router.get("/devices/:id" , deviceController.one);
router.put("/devices/:id" , deviceController.update);
router.delete("/devices/:id" , deviceController.delete);

export default router;