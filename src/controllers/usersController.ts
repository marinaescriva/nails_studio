import { Request, Response } from "express"

export const getUsers = (req:Request, res:Response) => {

    res.status(200).json(  //solo debe ser para super_admin
        {
            success:true,
            message: "ver todos los usuarios"
        }
    )
};
export const getUsersProfile = (req:Request, res:Response)=>{

    res.status(200).json(
        {
            success:true,
            message: "ver perfil de usuario"
        }
    )

};
export const putUsersProfile = (req:Request, res:Response)=>{

    res.status(200).json(
        {
            success:true,
            message: "modificar un campo del perfil"
        }
    )

}
