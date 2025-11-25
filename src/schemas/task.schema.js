import { z } from 'zod';

export const createTaskSchema = z.object({
    title: z
    .string("Ingrese un titulo")
    .min(3)
    .max(100),
    id_user: z
    .coerce
    .bigint("Ingrese un numero entero para el id de usuario")
    .min(1),
    assigned_to: z
    .coerce
    .bigint("Ingrese un numero entero para el id de usuario")
    .min(1)
})
.superRefine(async (data, ctx) =>{
    const user = data.passwrd.includes(data.id_user);
     if (!user) {
        ctx.addIssue({
            code:'custom',
            message:"El usuario no existe",
            path:['user_id']
        });
     }
    }
);