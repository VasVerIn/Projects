<template>
    <div>
      <header class="header">
        <section class="container">
            <nav class="navigation">
                <ul class="navigation_list">
                    <li class="navigation_list_item">
                      <router-link to="/">Конный клуб "Макет"</router-link>
                    </li>
                    <li class="navigation_list_item">
                        <i class="fa-solid fa-horse-head"></i>
                    </li>
                    <li class="navigation_list_item">
                        <router-link to="/todos">Заказ услуг</router-link>
                    </li>
                    <li class="navigation_list_item">
                        <router-link to="/login">Регистрация/Вход</router-link>
                    </li>
                </ul>
            </nav>

        </section>
    </header>
<section class="order">
      <h2>ЗАКАЗ УСЛУГ</h2>
      <hr>
      <AddTodo
      @add-todo="addTodo"
      />
      <hr>
      <TodoList
      v-if="todos.length"
      v-bind:todos="todos"
      @remove-todo="removeTodo"
      />
      <p v-else>Нет заказанных услуг!</p>
</section>
<div class="=container">
    <section class="login">       
                <h1 class="main_title" id="main_title">составьте план тренировки на свой вкус!</h1> 
                <button class="btn">
                  <router-link to="/login">Регистрация</router-link>
                </button>   
    </section>
</div>

    </div>
  </template>
  


<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
export default {
  name: 'app',
  data() {
    return {
      todos: [
        {id: 1, title: 'Тренировка с инструктором', completed: false},
        {id: 2, title: 'Прогулка верхом с инструктором', completed: false},
        {id: 3, title: 'Тренировка без инструктора', completed: false},
      ]
    }
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    },
    addTodo(todo) {
      this.todos.push(todo)
    }
  },
  components: {
    TodoList, AddTodo
  }
}
</script>
