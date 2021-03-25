import { calculatorRoutes } from "./calculator.route";
import express from "express";


const router = express.Router();


router.use("/", calculatorRoutes);




export default router;
