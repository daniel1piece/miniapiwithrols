import * as User from '../models/user.model.js';

export const getUsers = async (req, res) => {
    try {
        const users = await User.getUsers();
        res.status(200).json({
            message:"Usuarios obtenidos exitosamente",
            data:users
        });
    } catch (error) {
        res.status(500).json({
            message:"Ocurrio un error al intentar obtener los usuarios",
            error:error
        });
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await User.getUser(req.params.id);

        if (!user) res.status(200).json({message:"El usuario no se encuentra registrado en el sistema", data:user});

        res.status(200).json({
            message:"Usuarios obtenidos exitosamente",
            data:user
        });
    } catch (error) {
        res.status(500).json({
            message:"Ocurrio un error al intentar obtener el usuario",
            error:error
        });
    }
}

export const createUser = async (req, res) => {
    try {
        const user = await User.createUser(req.body);

        res.status(201).json({
            message:"Usuarios creado exitosamente",
            data:user
        });
    } catch (error) {
        res.status(500).json({
            message:"Ocurrio un error al intentar crear el usuario",
            error:error
        });
    }
}

export const updateUser = async (req, res) => {
    try {
        const user = await User.updateUser(req.params.id, req.body);

        res.status(200).json({
            message:"Usuario actualizado exitosamente",
            data:user
        });
    } catch (error) {
        res.status(500).json({
            message:"Ocurrio un error al intentar actualizar el usuario",
            error:error
        });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await User.deleUser(req.params.id);

        res.status(200).json({
            message:"Usuario eliminado exitosamente",
            data:user
        });
    } catch (error) {
        res.status(500).json({
            message:"Ocurrio un error al intentar eliminar el usuario",
            error:error
        });
    }
}