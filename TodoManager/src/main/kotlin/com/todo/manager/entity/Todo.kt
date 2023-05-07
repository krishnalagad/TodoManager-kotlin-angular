package com.todo.manager.entity

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table

@Entity
@Table(name = "todo_table")
data class Todo(

    @Id
    var id: String = "",

    @Column(name = "todo_title", length = 100)
    var title: String,

    @Column(name = "todo_content", length = 5000)
    var content: String,

    @Column(name = "todo_isCompleted")
    var completed: Boolean
) {
    constructor() : this("", "", "", false) {}
}