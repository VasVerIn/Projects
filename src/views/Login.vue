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

    <div class="container" mt-4>
        <div class="row">
        <div class="col-sm-4" mx-auto>
        <form @submit.prevent="registerUser" novalidate>

<div v-show="step ===1" class="step">
<div class="form-group">
    <label for="name">Ваше имя</label>
    <input type="text" class="form-control" id="name">
  </div>

  <div class="form-group">
    <label for="surname">Ваша фамилия</label>
    <input type="text" class="form-control" id="surname">
  </div>

  <div class="form-group">
    <label for="email">Email</label>
    <input type="text" class="form-control" id="email">
  </div>

  
  <button @click="nextStep" type="button" class="btn btn-primary">Следующий шаг</button>
</div>

<div v-show="step ===2" class="step">
<div class="form-group">
    <label for="password">Пароль</label>
    <input type="password" class="form-control" id="password">
  </div>

  <div class="form-group">
    <label for="passwordConfirm">Подтверждение пароля</label>
    <input type="password" class="form-control" id="passwordConfirm">
  </div>
  
  <div class="container">
  <button @click="nextStep" type="button" class="btn btn-primary">Следующий шаг</button>
  <button @click="backStep" type="button" class="btn btn-light mr-2">Назад</button>
  </div>

</div>

<div v-show="step ===3" class="step">
<div class="form-group">
    <label for="region">Регион</label>
    <input type="text" class="form-control" id="region">
  </div>


  <div class="form-group">
    <label for="city">Населенный пункт</label>
    <input type="text" class="form-control" id="city">
  </div>

  <button type="submit" class="btn btn-primary">Зарегистрироваться</button>
  
  <button @click="backStep" type="button" class="btn btn-ight mr-2">Назад</button>

</div>

</form>
    </div>
    </div>
    </div>
<div class="=container">
    <section class="login">       
                <h1 class="main_title" id="main_title">в одном шаге от мечты!</h1> 
                <button class="btn">
                    <router-link to="/">На главную</router-link>
                </button>   
    </section>
</div>
    
    </div>
</template>

<script>
export default {
    data () {
        return {
            step: 1
        }
    },
    methods: {
        nextStep() {
            if (this.step < 3) {
            this.step++
            }
        },
        backStep() {
            if (this.step > 1) {
                this.step--
            }
        },
        registerUser() {
            console.log('РЕГИСТРАЦИЯ ПРОШЛА УСПЕШНО!')
        }
    }
}
</script>