import { userExists } from "../services/task.service.js";

export const verifyRol = async (req, res, next) => {
    const { rol } = req.body;
    console.log(rol);
    
    if (rol !== "admin") {
        res.status(403).json({
            message: "Peticion no autorizada."
        });
    } 

    const { user_id } = req.body;
    const usuario = await userExists(user_id);
    console.log(user_id, " verify rol middleware");
    
    if ( !usuario ) {
         res.status(403).json({
            message: "Usuario no registrado"
        });
    }

    next();
}