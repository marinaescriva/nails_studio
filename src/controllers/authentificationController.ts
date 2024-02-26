app.post(`/auth/register`, (req, res)=>{

    res.status(200).json(
        {
            success:true,
            message: "registro de usuarios"
        }
    )

});
app.post(`/auth/login`, (req, res)=>{

    res.status(200).json(
        {
            success:true,
            message: "login de usuarios"
        }
    )

});