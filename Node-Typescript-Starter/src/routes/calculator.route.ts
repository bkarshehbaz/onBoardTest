import express from "express";
import calculator from "../controllers";


const router = express.Router();

router.post("/calculator", calculator.calSum);




export const calculatorRoutes = router;

