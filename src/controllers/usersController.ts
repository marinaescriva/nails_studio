const getUsers = (req, res) => {

    res.status(200).json(  //solo debe ser para super_admin
        {
            success:true,
            message: "ver todos los usuarios"
        }
    )

}