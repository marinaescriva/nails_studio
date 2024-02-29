import { Request, Response } from "express"
import { Service } from "../models/Service";

export const getServices = async (req: Request, res: Response) => {

    try {

        const services = await Service.find({
            select: {
                id: true,
                name: true,
                description: true,
            }
        });
        console.log(services)

        res.status(200).json({
            success: true,
            message: "services retrieved successfuly",
            data: services
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "services can't be retrieved",
            error: error,
        })


    }
}
