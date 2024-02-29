import { Request, Response } from "express"

export const postAppointments = (req:Request, res:Response)=>{


    res.status(200).json(
        {
            success:true,
            message: "crear cita"
        }
    )

};

export const updateAppointments = (req:Request, res:Response)=>{

    res.status(200).json(
        {
            success:true,
            message: "actualizar mi cita"
        }
    )

};

export const getAppointmentsById = (req:Request, res:Response)=>{

    req.params.id;

    res.status(200).json(
        {
            success:true,
            message: "recuperar mi cita"
        }
    )

};

export const getAppointments = (req:Request, res:Response)=>{

    res.status(200).json(
        {
            success:true,
            message: "ver mis citas"
        }
    )

};
