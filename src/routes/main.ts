import { Router } from 'express';
import { addTodo, getAllTodos, removeTodo, updateTitleTodo } from '../controllers/todo';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.get('/', async (req, res) => {
    const results = await getAllTodos();
    res.json({ results: results });
});

mainRouter.post('/todo', async (req, res) => {
    if(!req.body.title) return false;

    const results = await addTodo(req.body.title);
    res.status(201).json({ results: results });
});

mainRouter.put('/todo/:id', async (req, res) => {
    if(!req.params.id) return false;

    let id = parseInt(req.params.id);
    const results = await updateTitleTodo(id, req.body.title, req.body.done);
    res.status(202).json({ results: results });
});

mainRouter.delete('/todo/:id', async (req, res) => {
    if(!req.params.id) return false;

    let id = parseInt(req.params.id);
    const results = await removeTodo(id);
    res.status(201).json({ results: results });
});