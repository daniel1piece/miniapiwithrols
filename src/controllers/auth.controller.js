import jwt from "jsonwebtoken";
import { verifyPasswrd } from "../services/user.service.js";
import { saveToken, deleteToken } from "../models/token.model.js";

export const login = async(req, res) => {
    try {
        const { email, passwrd } = req.body;
        console.log("email", email);

        const user = await verifyPasswrd(email, passwrd);
        if (!user) return res.status(401).json({ message: "Verifique sus credenciales" });

        console.log(user);
        

        // Crear token
        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES }
        );
        console.log("token", token);
        console.log("user", user);

        await saveToken(user.id, token);

        return res.json({ 
            message: "Inicio de sesión exitoso",
            token: token 
        });
    } catch (error) {
        return res
        .status(500)
        .json({ 
            message: "Ocurrió un error, por favor intenta de nuevo más tarde.",
            error: error 
        });
    }
};

export const logout = async(req, res) => {
    try {
         console.log("test");
        const authHeader = req.headers["authorization"];
        if (!authHeader) return res.status(401).json({ message: "Necesita autorización" });
       
        const token = authHeader.split(" ")[1];
        if (!token) return res.status(401).json({ message: "Formato de autorización inválido" });
        
        
        const tokenDeleted = await deleteToken(token);
        if(!tokenDeleted) return res.status(400).json({ message: "No se pudo cerrar la sesión. Token inválido." });

        return res.status(200).json({ message: "Sesión cerrada exitosamente" });
    } catch (error) {
        return res
        .status(500)
        .json({ 
            message: "Ocurrió un error, por favor intenta de nuevo más tarde.",
            error: error 
        });
    }
};