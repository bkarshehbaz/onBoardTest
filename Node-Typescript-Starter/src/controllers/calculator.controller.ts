import { Request, Response, NextFunction } from "express";
import heroService from "../services";


export const calSum = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	// const heroes = await heroService.getHeroes();
// console.log(req.body)
	const formData = req.body as {num1:number,num2:number}
	const result = formData.num1 +formData.num2
	res.status(200).json({result});

};

