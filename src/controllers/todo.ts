import { Request, Response } from "express";
import { prisma } from "../libs/prisma";

export const getAllTodos = async () => {
    return await prisma.todo.findMany({});
}

export const addTodo = async (title: string) => {

    if (title && title.length >= 2) {
        const newTodo = await prisma.todo.create({
            data: {
                title: title
            }
        })

        return newTodo;
    }

}

export const updateTitleTodo = async (id: number, title: string, done: boolean) => {

    if (title && title.length >= 2) {
        return await prisma.todo.update({
            where: { id },
            data: { title: title }
        });
    }

    if (done === false) {
        return await prisma.todo.update({
            where: { id },
            data: { done: false }
        });
    } else {
        return await prisma.todo.update({
            where: { id },
            data: { done: true }
        });
    }
}

export const removeTodo = async (id: number) => {
    return await prisma.todo.delete({
        where: { id }
    })
}