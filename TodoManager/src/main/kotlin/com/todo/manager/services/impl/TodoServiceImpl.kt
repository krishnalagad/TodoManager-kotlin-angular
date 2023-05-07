package com.todo.manager.services.impl

import com.todo.manager.entity.Todo
import com.todo.manager.repositories.TodoRepository
import com.todo.manager.services.TodoService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.lang.RuntimeException
import java.util.UUID

@Service
class TodoServiceImpl(

    @Autowired
    var todoRepository: TodoRepository

) : TodoService {

    // Approach 1
//    override fun createTodo(todo: Todo): Todo = this.todoRepository.save(todo);

    // Approach 2
    override fun createTodo(todo: Todo): Todo {
        todo.id = UUID.randomUUID().toString();
        return this.todoRepository.save(todo);
    }

    override fun updateTodo(todoId: String, todo: Todo): Todo {
        val oldTodo =
            this.todoRepository.findById(todoId).orElseThrow { RuntimeException("Record not found in database.") };
        oldTodo.title = todo.title;
        oldTodo.content = todo.content;
        oldTodo.completed = todo.completed;

        return this.todoRepository.save(oldTodo);
    }

    override fun deleteTodo(todoId: String) {
        val oldTodo =
            this.todoRepository.findById(todoId).orElseThrow { RuntimeException("Record not found in database.") };
        this.todoRepository.delete(oldTodo);
    }

    override fun getAllTodos(): List<Todo> = this.todoRepository.findAll();

    override fun getTodo(todoId: String): Todo =
        this.todoRepository.findById(todoId).orElseThrow { RuntimeException("No record found.") };

}