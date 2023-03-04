import * as yup from "yup";

export const singupSchema = yup.object().shape({
  firstname: yup.string().required("Name é obrigatório"),
  lastname: yup.string().required("Sobrenome é obrigatório"),
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
  terms_accepted: yup
    .boolean()
    .required("Aceite os termos")
    .oneOf([true], "Aceite os termos"),
});
