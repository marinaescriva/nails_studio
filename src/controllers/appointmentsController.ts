app.post(`/appointments`, (req, res)=>{

    res.status(200).json(
        {
            success:true,
            message: "crear cita"
        }
    )

});
app.put(`/appointments`, (req, res)=>{

    res.status(200).json(
        {
            success:true,
            message: "actualizar mi cita"
        }
    )

});
app.get(`/appointments/{id}`, (req, res)=>{

    res.status(200).json(
        {
            success:true,
            message: "recuperar mi cita"
        }
    )

});
app.get(`/appointments`, (req, res)=>{

    res.status(200).json(
        {
            success:true,
            message: "ver mis citas"
        }
    )

});