import jwt from 'jsonwebtoken';
import { isTokenActive } from '../models/token.model.js';

export const verifyToken = async (req, res, next) => {

    try {
        const authHeader = req.headers['authorization'];

        if (!authHeader) return res.status(401).json({message: "Necesita autorizacion"});

        const token = authHeader.split(" ")[1];
        if (!token) return res.status(401).json({message: "Formato de autorizacion invalido"});

        try {
            // console.log("token PPP");
            const isActive = await isTokenActive(token);
            // console.log("isActive", "authMiddleware");
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            
            req.user = decoded;
            next();            
        } catch (error) {
            return res.status(401).json({ message: "Token invalido o expirado" });
        }
    } catch (error) {
        return res
        .status(500)
        .json({
            message:"Ocurrio un error, por favo intenta de nuevo mas tarde.",
            error: error
        });
    }

};