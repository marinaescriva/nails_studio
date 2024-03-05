import { Request, Response } from "express"
import { Appointment } from "../models/Appointment";

export const postAppointments = async (req: Request, res: Response) => {

    try {
        const appointment_date = req.body.appointmentDate;
        console.log(appointment_date);

        const user = req.body.user.id;
        const service = req.body.service.id;


        const newAppointment = await Appointment.create({
            user:{
                id: user
            },
            service:{
                id: service
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

 
//     try {

//         const userId = req.params.id;
//         const serviceId = req.body.serviceId;
//         const name = req.body.name;


//         //validar datos
//         const user = await User.findOneBy( //promesa que busca el id del user, busca si existe el resgistro 
//             {
//                 id: parseInt(userId)
//             }
//         )

//         if (!user) {
//             return res.status(404).json({
//                 success: false,
//                 message: "user not found",
//             })
//         }

    
//         //tratar datos

//         //actualizar en BD
//         const userUpdated = await User.update(
//             {
//                 id: parseInt(userId)

//             },
//             {
//                 name: name
//             }
//         );

//         //responder

//         res.status(200).json({
//             success: true,
//             message: "user is updated",
//             data: userUpdated
//         })


//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "user cant be Updated",
//             error: error
//         })

    }


export const getAppointmentsById = async(req: Request, res: Response) => {

   const appointmentId = req.params.id;

    const appointment = await Appointment.findOne( //promesa que busca el id del user
    { where: 
     {
         id: parseInt(appointmentId)
     }
     }
 )



    res.status(200).json(
        {
            success: true,
            message: "recuperar mi cita",
            data: appointment

        }
    )

};

export const getAppointments = async (req: Request, res: Response) => {

    const userId = req.tokenData.userId // busca con el token el usuario

    const appointment = await Appointment.find( //promesa que busca las citas de ese id de usuario
    { where: 
     {
         user:{
            id: userId
         }
     }
     }
 )

    res.status(200).json(
        {
            success: true,
            message: "ver mis citas",
            data: appointment //muestra las citas de ese id user
        }
    )

};

export const deleteAppointmentId = async (req: Request, res: Response) => {
}