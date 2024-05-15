import express from 'express'
import usuarios from "./controllers/usuarios.js"
import todos from "./controllers/todos.js"

const app = express()
app.use(express.static('public'))
app.use(express.json());


app.use("/api",usuarios);
app.use("/api",todos);


app.get('/api', (req, res) => {
     	res.type('text/plain')
     	res.end('Hello World!')
     })

export default app

// const users = [
// 	{
// 		username: 'admin',
// 		name: 'Gustavo Alfredo Marín Sáez',
// 		password: '1b6ce880ac388eb7fcb6bcaf95e20083:341dfbbe86013c940c8e898b437aa82fe575876f2946a2ad744a0c51501c7dfe6d7e5a31c58d2adc7a7dc4b87927594275ca235276accc9f628697a4c00b4e01' // certamen123
// 	},
// 	{
// 		username: 'user',
// 		name: 'Gandalf',
// 		password: 'cc46a0a0a1320b7dd69fe26c288c9f32:bcd6c1505c8973be89c75d24184ecb9a2edb54913a18e955cfdd5a65eb63f933d2ad15acceebeccea494f4481522a074e1d60d0d58ab8ecad380988ee8ec7684'
// 	}
// ]
// export const todos = []

// app.use(express.static('public'))

// // Su código debe ir aquí...

// export function checkPassword(password, hash) {
// 	const [salt, key] = hash.split(':')

// 	return new Promise((resolve) => {
// 		scrypt(password, salt, 64, (err, derivedKey) => {
// 			if(err) {
// 				return resolve(false) // or throw mmm...
// 			}

// 			resolve(derivedKey.toString('hex') === key)
// 		})
// 	})
// }

// function authMiddleware(req, res, next) {

// 	const authorizationToken = req.get('x-authorization')

// 	if (!authorizationToken) {
// 		return res.status(401).send({ error: 'Token de autorización no enviado. Recuerda usar el header X-Authorization' })
// 	}

// 	const user = users.find(user => user.token === authorizationToken)

// 	if (!user) {
// 		return res.status(401).send({ error: 'Token inválido' })
// 	}

// 	next()
// }

// app.use(express.json())

// app.get('/api', (req, res) => {
// 	res.type('text/plain')
// 	res.end('Hello World!')
// })

// app.post('/api/login', async (req, res) => {
// 	const { username, password } = req.body

// 	if (typeof username !== 'string' || typeof password !== 'string') {
// 		return res.status(400).send({
// 			error: 'Datos incorrectos. Recuerde enviar usuario y contraseña'
// 		})
// 	}

// 	const user = users.find(user => user.username === username)

// 	if (!user) {
// 		return res.status(401).send({
// 			error: 'Usuario y/o password incorrectos'
// 		})
// 	}

// 	if (!(await checkPassword(password, user.password))) {
// 		return res.status(401).send({
// 			error: 'Usuario y/o password incorrectos'
// 		})
// 	}

// 	user.token = randomBytes(48).toString('hex')

// 	res.send({
// 		username: user.username,
// 		name: user.name,
// 		token: user.token
// 	})
// })

// app.get('/api/todos', authMiddleware, (req, res) => {
// 	res.send(todos)
// })

// app.get('/api/todos/:id', authMiddleware, (req, res) => {
// 	const todo = todos.find(todo => todo.id === req.params.id)

// 	if (!todo) {
// 		return res.status(404).send({
// 			error: 'Item no encontrado'
// 		})
// 	}

// 	res.send(todo)
// })

// app.post('/api/todos', authMiddleware, (req, res) => {
// 	const { title } = req.body

// 	if (typeof title !== 'string') {
// 		return res.status(400).send({
// 			error: 'Datos incorrectos'
// 		})
// 	}

// 	const todo = {
// 		id: randomUUID(),
// 		title,
// 		completed: false
// 	}
// 	todos.push(todo)

// 	res.status(201).send(todo)
// })

// app.put('/api/todos/:id', authMiddleware, (req, res) => {
// 	const todo = todos.find(todo => todo.id === req.params.id)

// 	if (!todo) {
// 		return res.status(404).send({
// 			error: 'Item no encontrado'
// 		})
// 	}

// 	const { title, completed } = req.body

// 	if ((title !== undefined && typeof title !== 'string') || (completed !== undefined && typeof completed !== 'boolean')) {
// 		return res.status(400).send({
// 			error: 'Datos incorrectos'
// 		})
// 	}

// 	if (typeof title === 'string') {
// 		todo.title = title
// 	}

// 	if (typeof completed === 'boolean') {
// 		todo.completed = completed
// 	}

// 	res.status(200).send(todo)
// })

// app.delete('/api/todos/:id', authMiddleware, (req, res) => {
// 	const index = todos.findIndex(todo => todo.id === req.params.id)

// 	if (index === -1) {
// 		return res.status(404).send({
// 			error: 'Item no encontrado'
// 		})
// 	}

// 	todos.splice(index, 1)
// 	res.status(204).send()
// })

// // ... hasta aquí

