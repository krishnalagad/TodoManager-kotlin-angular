package com.todo.manager.repositories

import com.todo.manager.entity.Todo
import org.springframework.data.jpa.repository.JpaRepository

interface TodoRepository: JpaRepository<Todo, String>