package com.todo.manager

import com.todo.manager.entity.Todo
import org.junit.jupiter.api.Test
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class TodoManagerApplicationTests {

	@Test
	fun contextLoads() {
	}

	@Test
	fun testKotlin(){
		var todo = Todo("12", "Testcase 1", "Description", true);
		println(todo);
	}

}
