import { Request, Response } from "express";
import { User } from "../models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const register = async (req: Request, res: Response) => {

    try {
        const { name, surname, password, email } = req.body;
        //// to do the token

        if (!name || !surname || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are needed"
            })
        }

        // password validation 

        if (password.length < 6 || password.length > 10) {
            return res.status(400).json({
                success: false,
                message: "password incorrect"
            })
        }

        // email validation, if this email already exist..

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

        // in case email doesnt have correct format..

        const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (!validEmail.test(email)) {
            return res.status(400).json(
                {
                    success: false,
                    message: "format email invalid"
                }
            )
        }

        const hashedPassword = bcrypt.hashSync(password, 8);
            console.log(hashedPassword)

        const newUser = await User.create({

            name: name,
            surname: surname,
            email: email,
            password: hashedPassword

            // this user is always id:3 because is a normal user, not admin or superadmin

        }).save() // saving this new user in DB

        console.log(newUser) //show new user created

        return res.status(201).json(
            {

                success: true,
                message: "user is registered"

            }
        )
        } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "the user can't be registered",
                error: error
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
                message: "Email and/or password are required"
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
                password: true, // token
                email: true,
                role: {
                    name: true
                }
            }
        })

        // error if this user doesnt exist or isnt wrote properly

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Wrong user"
            })
        }


        // compare passwords 
        const isValidPassword = bcrypt.compareSync(password, user.password);

        if (!isValidPassword) {
            return res.status(400).json({
                success: false,
                message: "Email and password invalid"
            })
        }

        // create the TOKEN
        const token = jwt.sign({
            userId: user.id,
            roleName: user.role.name
        },
            process.env.JWT_SECRET as string,
            {
                expiresIn: "9h"
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
};