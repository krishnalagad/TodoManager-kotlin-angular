package com.todo.manager.services

import com.todo.manager.entity.Todo

interface TodoService {

    fun createTodo(todo: Todo): Todo;

    fun updateTodo(todoId: String, todo: Todo): Todo;

    fun deleteTodo(todoId: String);

    fun getAllTodos(): List<Todo>;

    fun getTodo(todoId: String): Todo;
}