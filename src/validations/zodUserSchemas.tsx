import { z } from 'zod'

// es como si definiera un objeto de javascript
// las propiedades son los datos que van a ir comparándose
export const userRegisterSchema = z.object({
    firstName: z
        .string()
        .min(1, {
            message: 'Debés ingresar un nombre.'
        })
        .min(3, {
            message: 'El nombre debe tener al menos de 3 caracteres.'
        })
        .max(50, {
            message: 'El nombre debe tener como máximo 50 carecteres.'
        }),
    lastName: z
        .string()
        .min(1, {
            message: 'Debés ingresar un apellido.'
        })
        .min(3, {
            message: 'El apellido debe tener al menos de 3 caracteres.'
        })
        .max(50, {
            message: 'El apellido debe tener como máximo 50 carecteres.'
        }),
    dni: z
        .string()
        .min(1, {
            message: 'Debés ingresar un dni.'
        })
        .min(5, {
            message: 'El dni debe tener al menos 5 caracteres.'
        }),
    healthPlan: z
        .string(),
    phone: z
        .string(),
    email: z
            .string()
            .min(1, {
                message: 'Debés ingresar un correo.'
            })
            .email({
                message: 'Por favor ingrese un correo válido.'
            }),
    password: z
        .string()
        .min(1, {
            message: 'Debés ingresar un contraseña.'
        })
        .min(6, {
            message: 'La contraseña debe tener al menos 6 caracteres.'
        }),
})

export const userLoginSchema = z.object({
    dni: z
        .string()
        .min(1, {
            message: 'Debés ingresar un dni.'
        })
        .min(5, {
            message: 'El dni debe tener al menos 5 caracteres.'
        }),
    password: z.string()
        .min(1, {
            message: 'Debés ingresar un contraseña.'
        })
        .min(6, {
            message: 'La contraseña debe tener al menos 6 caracteres.'
        })
});
