import { Request, Response } from "express";
import { User } from "../models/User";
import {  hashPassword } from "../helpers/passwordUtilities";

export const register = async (req: Request, res: Response) => {

    try {
        const { name, surname, password, email } = req.body;
        //// to do the token

        if (!name || !surname || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are needed", //cambia esto
            })
        }
        // todo validar formato email

        const user = await User.findOne(
            {
                where: {
                    email: email
                },
            }
        );

        if(user){

           throw new Error ("register cannot be completed");
        }

        const hashedPassword = hashPassword(password);

        await User.create({

            name: name,
            surname:surname,
            email: email,
            password: hashedPassword

        }).save()
        console.log(4)

        return res.status(201).json(
            {

                success: true,
                message: "user was created"

            }
        )
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "the user can't be created"
            }
        )
    }

};
export const login = (req: Request, res: Response) => {

    res.status(200).json(
        {
            success: true,
            message: "login de usuarios"
        }
    )

};
