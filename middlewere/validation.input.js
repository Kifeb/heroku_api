exports.userValidation = (req, res, next) => {
    const {name, email, age} = req.body;

    if(name === undefined || name == ""){
        return res.status(400).json({
            status: 400,
            success: false,
            message: "bad request",
            data: {
                original: req.body
            },
            error: "name field is required"
        })
    }
    if(email === undefined || email == ""){
        return res.status(400).json({
            status: 400,
            success: false,
            message: "bad request",
            data: {
                original: req.body
            },
            error: "email field is required"
        })
    }
    if(age === undefined || age == ""){
        return res.status(400).json({
            status: 400,
            success: false,
            message: "bad request",
            data: {
                original: req.body
            },
            error: "age field is required"
        })
    }
    next()
}