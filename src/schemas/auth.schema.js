import { z } from 'zod';
import { getUserByEmail, verifyPasswrd } from '../services/user.service.js';

export const loginSchema = z.object({
    email: z
    .string('El correo electrónico es obligatorio')
    .email({ message: "Correo electrónico inválido" }),
    passwrd: z
    .string('La contraseña es obligatoria')
})
.superRefine( async (data, ctx) => {
    const user =  await getUserByEmail(data.email);
    if (!user) {
        ctx.addIssue({
            code: "custom",
            path: ['email', "passwrd"],
            message: 'Correo electrónico o contraseña incorrectos Em'
        });
    }

    const validPasswrd = await verifyPasswrd(data.email, data.passwrd);
    console.log(validPasswrd);
    if (!validPasswrd) {
        ctx.addIssue({
            code: "custom",
            path: ['email', "passwrd"],
            message: 'Correo electrónico o contraseña incorrectos_'
        });
    }
});