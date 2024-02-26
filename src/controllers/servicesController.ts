import { Request, Response } from "express"

export const getServices = (req:Request, res:Response) => {

    res.status(200).json(
        {
            success:true,
            message: "ver todos los servicios"
        }
    )
};