import { Request, Response } from "express"

export const postAuthRegister = (req:Request, res:Response)=>{

    res.status(200).json(
        {
            success:true,
            message: "registro de usuarios"
        }
    )

};
export const postAuthLogin = (req:Request, res:Response)=>{

    res.status(200).json(
        {
            success:true,
            message: "login de usuarios"
        }
    )

};
