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
    <section class="mainscreen">       
                <h1 class="main_title" id="main_title">лучше нету наслаждения, чем скакать до изнеможения</h1> 
                <button class="btn">
                    <router-link to="/login">Записаться</router-link>
                </button>   
    </section>
    <section class="abought">
                     <div class="abought_wrap-discription">

                        <p>
                            Приятная атмосфера, выбор лошадей, опытные тренеры.
                        </p>
                         <p>
                            Не знаешь, чем заполнить свободное время? Проведи его с пользой, отдохни телом и душой!
                        </p>
                        <p>
                            В нашем клубе каждый найдет для себя то, что ищет. Общение, успокоение, приятное времяпрепровождение...
                        </p>
                        
                     </div>
    </section>
</div>
</template>