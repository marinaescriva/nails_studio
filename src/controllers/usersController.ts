import { Request, Response } from "express"

export const getUsers = (req:Request, res:Response) => {

    res.status(200).json(  //solo debe ser para super_admin
        {
            success:true,
            message: "ver todos los usuarios"
        }
    )
};

