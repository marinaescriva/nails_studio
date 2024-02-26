
app.get(`/services`, (req, res)=>{

    res.status(200).json(

        {
            success:true,
            message: "ver los servicios"
        }
    )

});
