import { Request, Response } from "express";
import { User } from "../models/User";
import { hashPassword } from "../helpers/passwordUtilities";
import  jwt  from "jsonwebtoken";
import bcrypt from "bcrypt";

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

        if (user) {

            throw new Error("register cannot be completed");
        }

        const hashedPassword = hashPassword(password);

        await User.create({

            name: name,
            surname: surname,
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
export const login = async (req: Request, res: Response) => {

    try {
        const email = req.body.email;
        const password = req.body.password;

        // email validation

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            })
        }

        // search user in DataBase

        const user = await User.findOne({
            where: {
                email: email
            },
            relations: {
                role: true
            },
            select: {
                id: true,
                password: true, ///hashedPassword? tokeeen
                email: true,
                role: {
                    name: true
                }
            }
        })

        // error if this user doesnt exist

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Wrong user"
            })
        }
      
        console.log(user);

        // compare passwords
        const isValidPassword = bcrypt.compareSync(password, user.password);

        if (!isValidPassword) {
            return res.status(400).json({
                success: false,
                message: "Email and password invalid"
            })
        }

        // crear TOKEN
        const token = jwt.sign({
            userId: user.id,
            roleName: user.role.name
        },
            process.env.JWT_SECRET as string,
            {
                expiresIn: "5h"
            }

        )

        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            token: token
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "User cannot be logged in",
            error: error
        })
    }
}