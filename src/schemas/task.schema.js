import { z } from 'zod';
import { userExists, userIsAdmin } from '../services/task.service.js';

export const createTaskSchema = z.object({
    title: z
    .string("Ingrese un titulo")
    .min(3)
    .max(100),
    id_user: z
    .coerce
    .bigint("Ingrese un numero entero para el id de usuario")
    .min(1),
    rol: z
    .string("No hay un rol definido")
    .min(4),
    assigned_to: z
    .coerce
    .bigint("Ingrese un numero entero para el id de usuario")
    .min(1)
})
.superRefine(async (data, ctx) =>
    {
        const user = await userExists(data.id_user);
        // console.log(user, " task schema js");
        
        if (!user) {
            ctx.addIssue({
                code:'custom',
                message:"El usuario no existe",
                path:['user_id']
            });
        }

        const assignedUserExist = await userExists(data.assigned_to);
        // console.log(assignedUserExist, " task schema js");
        if (!assignedUserExist) {
            ctx.addIssue({
                code:'custom',
                message:"El usuario al que se le assigna la tarea, no existe",
                path:['assigned_to']
            });
        }

        const userRol =  await userIsAdmin( data.id_user );
        console.log(userRol, " task schema");
        
        
        if (!userRol || userRol !== "admin") {
            ctx.addIssue({
                code:'custom',
                message:"Usuario no autorizado o no existe",
                path:['rol']
            });
        }
    
    }  
);

export const updateTaskSchema = z.object({
    field:z
    .string("Ingrese un campo."),
    value: z.
    string("Ingrese un valor"),
    rol: z
    .string("No hay rol de usuario")
    .min(3, "El rol debe tener al menos 4 caracteres"),
    user_id: z
    .coerce
    .bigint("No ha ingresado id de usuario")
})
.superRefine(async (data, ctx) => {
    const usuario = await userExists(data.user_id);
    if (!usuario) {
        ctx.addIssue({
            code:"custom",
            message: "El usuario no existe",
            path: ['user_id']
        });
    }

    const rol = await userIsAdmin( data.user_id );
    console.log(rol);
    
    if (!rol || rol !== "admin" ) {
        ctx.addIssue({
            code: "custom",
            message: "Usuario no autorizado o no existente",
            path: ['user_id']
        });
    }
});