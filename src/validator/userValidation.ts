import * as Yup from "yup";

const userValidation = Yup.object().shape({
    avatar: Yup.string().label("Name"),
    first_name: Yup.string().label("Name"),
    last_name: Yup.string().label("Name"),
    email: Yup.string()
        .email("Por favor ingrese un email válido")
        .label("Email"),
});

export default userValidation;