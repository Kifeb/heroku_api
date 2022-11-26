const Users = require("../models/users");

exports.create = async (req, res) => {
    try {
        const {name, email, age} = req.body;

        const user = await Users.create({
            name,
            email,
            age
        })

        return res.status(201).json({
            status: 201,
            success: true,
            message: "new User created",
            data: {
                user: user,
            },
            error: null
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: 500,
            success: false,
            message: error.message,
            data: null,
            error: "Internal Server Error"
        })
    }
}

exports.all = async (req, res) => {
    try {
        const users = await Users.findAll()
        return res.status(200).json({
            status: 200,
            success: true,
            message: "ok",
            data: {
                users,
            },
            error: null
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            status: 500,
            success: false,
            message: "internal server error",
            data: null,
            error: "Internal Server Error"
        })
    }
}

exports.update = async (req, res) => {
    try {
        const { id } = req.params

        const updated = await Users.update(req.body, {
            where: {
                id: id,
            }
        })

        if (!updated[0]) {
            return res.status(404).json({
                status: 404,
                success: false,
                message: "failed to update user",
                data: null,
                error: "Failed To Update User"
            })
        }

        return res.status(200).json({
            status: 200,
            success: true,
            message: "user updated",
            data: null,
            error: null
        })

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            status: 500,
            success: false,
            message: "internal server error",
            data: null,
            error: "Internal Server Error"
        })
    }
}

exports.destroy = async (req, res) => {
    try {
        const { id } = req.params

        const destroyed = await Users.destroy({
            where: {
                id: id,
            }
        })

        if (!destroyed) {
            return res.status(404).json({
                status: 404,
                success: false,
                message: "failed to delete user",
                data: null,
                error: "Failed To Delete User"
            })
        }

        return res.status(200).json({
            status: 200,
            success: true,
            message: "User deleted",
            data: null,
            error: null
        })

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            status: 500,
            success: false,
            message: "internal server error",
            data: null,
            error: "Internal Server Error"
        })
    }
}