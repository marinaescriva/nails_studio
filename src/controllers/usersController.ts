import { Request, Response } from "express";
import { User } from "../models/User";
// import { Role } from "../models/Role";
// import bcrypt from "bcrypt";

export const getUsers = async (req: Request, res: Response) => {

    try {
        const users = await User.find({

            select: {
                id: true,
                name: true,
                surname: true,
                email: true
            }

        });

        res.status(200).json(  //solo debe ser para super_admin
            {
                success: true,
                message: "users retrieved successfully",
                data: users
            }
        )
    } catch (error) {
        res.status(200).json(
            {
                success: false,
                message: "users can't be retrieved",
                error: error
            }
        )

    }
};

export const getUsersProfile = (req: Request, res: Response) => {

    res.status(200).json(
        {
            success: true,
            message: "v"
        }
    )

};
export const putUsersProfile = (req: Request, res: Response) => {

    res.status(200).json(
        {
            success: true,
            message: "modificar un campo del perfil"
        }
    )

};
