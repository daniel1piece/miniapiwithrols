import { z } from 'zod';
import { getUserByEmail } from '../services/user.service.js';

export const createUserSchema = z.object({
    name: z
    .string("Ingrese un nombre")
    .min(2)
    .max(100),
    email:z
    .string("El correo el obligatorio")
    .email('Ingrese un email')
    .min(5, 'El correo debe tener al menos 5 caracteres.'),
    passwrd: z
    .string('Ingrese una contraseña')
    .min(9, "Cotraseña debe tener al menos 9 caracteres")
    .max(20,'La contrasena debe tener como max 20 caracteres')
    .regex(/[a-z]/, 'La contraseña debe tener al menos una letra minuscula')
    .regex(/[A-Z]/, 'La contraseña debe tener al menos una letra mayuscula')
    .regex(/[0-9]/, 'La contraseña debe tener al menos una letra numero')
    .regex(/[$%+*-/!#,<>()&@!~.,{}?]/, 'La contraseña debe tener al menos un caracter especial ($,%,+,*,-,/,!,#,<,>,(,),&,@,!,~,.,{,},?,)'),
    confirmPasswrd: z
    .string('La confirmacion de la contraseña es obligatoria'),
    rol: z
    .string("Ingrese un rol")
    .min(3)
    .max(100)
})
.superRefine(async (data, ctx) => {
    const passwordExists = data.passwrd.includes(data.name);
     if (passwordExists) {
        ctx.addIssue({
            code:'custom',
            message:"La contraseña no debe contener su nombre",
            path:['passwrd']
        });
     }

      const existingUser = await getUserByEmail(data.email);
          if (existingUser) {
             ctx.addIssue({
                 code:"custom",
                 path:["email"],
                 message:"El email ya esta registrado en al plataforma."
             });
          }

          if (data.passwrd !== data.confirmPasswrd){
        ctx.addIssue({
            code:"custom",
            path:["confirmPasswrd", "passwrd"],
            message:"Las contrseñas no coinciden"
        });
     }
});