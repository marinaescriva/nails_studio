import { Request, Response } from "express"
import { Appointment } from "../models/Appointment";

export const postAppointments = async (req: Request, res: Response) => {

    try {
        const appointment_date = req.body.appointmentDate;
        console.log(appointment_date);

        const userId = req.tokenData.userId;
        const serviceId = req.body.service.id;


        const newAppointment = await Appointment.create({
            user: {
                id: userId
            },
            service: {
                id: serviceId
            },
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


export const updateAppointments = async (req: Request, res: Response) => { //////////////////// to do

    try {

        const appointmentId = req.body.id;
        // const userId = req.tokenData.userId;
        // const appointmentDate = req.body.appointmentDate;
        const serviceId = req.body.serviceId;
        
        const appointment = await Appointment.findOneBy( // busca el appointment por su id
            {
                id: parseInt(appointmentId)
            }
        )
        

        if (!appointment) {
            return res.status(404).json({
                success: false,
                message: "this appointment didn't exist",
            })
        }


        // type of service updated
        const appointmentUpdated = await Appointment.update(
            {
                id: parseInt(appointmentId)
            },
            {
                service: {
                    id: parseInt(serviceId)
                }

            },

        );

        //responder
        
        res.status(200).json({
            success: true,
            message: "appointment is updated",
            data: appointmentUpdated
        })


    } catch (error) {
        res.status(500).json({
            success: false,
            message: "user cant be Updated",
            error: error
        })

    }
};


export const getAppointmentsById = async (req: Request, res: Response) => {

    const appointmentId = req.params.id;

    const appointment = await Appointment.findOne( //promesa que busca el id del user
        {
            where:
            {
                id: parseInt(appointmentId)
            }
        }
    )
    if (!appointmentId) {
        return res.status(400).json({
            success: false,
            message: `this: ${appointmentId} didn't exist yet`
        })
    }


    res.status(200).json(
        {
            success: true,
            message: "appointment finded succesfully",
            data: appointment

        }
    )

};

export const getAppointments = async (req: Request, res: Response) => {

    const userId = req.tokenData.userId // busca con el token el usuario

    const appointment = await Appointment.find( //promesa que busca las citas de ese id de usuario
        {
            where:
            {
                user: {
                    id: userId
                }
            }
        }
    );

    res.status(200).json(
        {
            success: true,
            message: "user has appointments",
            data: appointment //muestra las citas de ese id user
        }
    )

};

