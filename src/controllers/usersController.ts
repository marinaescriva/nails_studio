import { Request, Response } from "express";
import { User } from "../models/User";


export const getUsers = async (req: Request, res: Response) => {

    try {
        const users = await User.find({

            select: {
                id: true,
                name: true,
                surname: true,
                email: true,
                createdAt: true,
                updatedAt: true
            }

        });

        res.status(200).json(
            {
                success: true,
                message: "users retrieved successfully",
                data: users
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "users can't be retrieved",
                error: error
            }
        )

    }
};

export const getUsersProfile = async (req: Request, res: Response) => {

    // search users by his name and show his profile, only for own user

    try {
        const userId = req.params.id;

        const user = await User.findOne( //promesa que busca el id del user
           { where: 
            {
                id: parseInt(userId)
            }
            }
        )

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "user not found",
            })
        }

        res.status(200).json({

            success: true,
            message: "user retrieved",
            data: user
        })

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "user can't be retrieved",
            error: error
        })
    }
};

export const updateUsersProfile = async (req: Request, res: Response) => {

    try {

        const userId = req.params.id;
        const name = req.body.name;


        //validar datos
        const user = await User.findOneBy( //promesa que busca el id del user, busca si existe el resgistro 
            {
                id: parseInt(userId)
            }
        )

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "user not found",
            })
        }

    
        //tratar datos

        //actualizar en BD
        const userUpdated = await User.update(
            {
                id: parseInt(userId)

            },
            {
                name: name
            }
        );

        //responder

        res.status(200).json({
            success: true,
            message: "user is updated",
            data: userUpdated
        })


    } catch (error) {
        res.status(500).json({
            success: false,
            message: "user cant be Updated",
            error: error
        })

    }}



export const createUsers = async (req: Request, res: Response) => {

    try {
        const name = req.body.name;
        console.log(name);

        if (name.length > 20) {
            return res.status(400).json({
                success: false,
                message: "Name must be under 20 characters"
            }
            )
        }

        const newUser = await User.create({
            name: name,
            surname: name,
        }).save()

        res.status(201).json({
            success: true,
            message: "User created",
            data: newUser
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "can't create the user",
            error: error
        })
    }
};
