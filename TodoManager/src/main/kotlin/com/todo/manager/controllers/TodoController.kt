package com.todo.manager.controllers

import com.todo.manager.entity.Todo
import com.todo.manager.services.TodoService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/v1/todo")
@CrossOrigin("*")
class TodoController(

    @Autowired
    var todoService: TodoService
) {

    // create todo
    @PostMapping
    fun create(@RequestBody todo: Todo): Todo = this.todoService.createTodo(todo);

    // update todo
    @PutMapping("/{todoId}")
    fun update(@PathVariable("todoId") todoId: String, @RequestBody todo: Todo): Todo =
        this.todoService.updateTodo(todoId, todo);

    // get all todos
    @GetMapping
    fun getAll(): List<Todo> = this.todoService.getAllTodos();

    // get one todo
    @GetMapping("/{todoId}")
    fun getOne(@PathVariable("todoId") todoId: String): Todo = this.todoService.getTodo(todoId);

    // delete one todo
    @DeleteMapping("/{todoId}")
    fun deleteOne(@PathVariable("todoId") todoId: String) = this.todoService.deleteTodo(todoId);

}