import { Request, Response } from "express"
import { Appointment } from "../models/Appointment";

export const postAppointments = async (req: Request, res: Response) => {

    try {
        const appointment_date = req.body.appointmentDate;
        console.log(appointment_date);

        const user = req.body.user;
        const service = req.body.service;


        const newAppointment = await Appointment.create({
            user: user,
            service: service,
            appointmentDate: appointment_date
           
        }).save()

        res.status(201).json({
            success: true,
            message: "Appointment created",
            data: newAppointment
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "can't create the appointment",
            error: error
        })
    }
};


export const updateAppointments = (req: Request, res: Response) => { //////////////////// to do

    res.status(200).json(
        {
            success: true,
            message: "actualizar mi cita"
        }
    )

};

export const getAppointmentsById = (req: Request, res: Response) => {

    req.params.id;

    res.status(200).json(
        {
            success: true,
            message: "recuperar mi cita"
        }
    )

};

export const getAppointments = (req: Request, res: Response) => {

    res.status(200).json(
        {
            success: true,
            message: "ver mis citas"
        }
    )

};

export const deleteAppointmentId = async (req: Request, res: Response) => {
}