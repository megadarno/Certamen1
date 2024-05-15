import { Router , json} from "express";
import { authMiddleware } from "../middlewares/middleware.js";
import { listatoDo, insert, encontrar , deletelistas, update} from "../repositories/todosid.js";
import { createTodoSchema, updateTodoSchema } from "../schemas/index.js";


const router = Router();

router.get('/todos', authMiddleware, (req, res) => {
   res.status(200).json(listatoDo());

   });

   router.get('/todos/:id', authMiddleware, (req, res) => {
    const encontrarid =  encontrar(req.params.id);
    if (encontrarid) {
      res.send(encontrarid);
    }
    else{
      return res.status(404).send('toDo no encontrado');
    }
 
    });
 

router.post('/todos', authMiddleware, (req, res) => {
	
	let title = createTodoSchema.validateSync(req.body, {stripUnknown: true});
	const todo = insert (title.title)

	res.status(201).send(todo)
})


router.put('/todos/:id', authMiddleware, (req, res) => {
	const id= req.params.id;
  const title= req.params.username;
  const completed= req.params.completed;
  let updatvalschema
  try {
    updatvalschema  = updateTodoSchema.validateSync(req.body, {stripUnknown: true});
    
  } catch(ex) {
      return res.status(400).send(ex);
}

	if ((title !== undefined && typeof title !== 'string') || (completed !== undefined && typeof completed !== 'boolean')) {
		return res.status(400).send({error: 'Datos incorrectos'	})
	}

	
  const updatelista =  update(id, updatvalschema)
  if (updatelista) {
    res.json(updatelista);
  }
  else{
    res.status(404).send('toDo no encontrado');
  }
	
}) 


router.delete('/todos/:id', authMiddleware, (req, res) => {
	const id = req.params.id;

  if (deletelistas(id)) {
    res.status(204).send();
  } else {
    res.status(404).json("Actividad no encontrada");
  }
});
export default router