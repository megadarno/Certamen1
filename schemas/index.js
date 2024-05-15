import { setLocale } from "yup";
import { es } from "yup-locales";
import { object, string, bool } from "yup";

setLocale(es);

export const createTodoSchema = object({
  title: string().strict().required(),
  
  
});


export const updateTodoSchema = object({
  id : string().strict().optional(),
  title: string().strict().optional(),
  completed: bool().strict().optional().default(false),
   
});

export const idTodoSchema = object({
    id: string().strict().required(),
  
});

export const loginSchema = object({
  username: string().strict().required(),
  password: string().strict().required(),

});



