<template>
    <form @submit.prevent="onSubmit"> 
        <input type="text" v-model="title"> 
        <button type="submit">Добавить услугу, пожелание</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            title: ''
        }
    },
   
    methods: {
        onSubmit() {
            if (this.title.trim()) {
                const newTodo = {
                    id: Date.now(),
                    title: this.title,
                    completed: false
                }
                this.$emit('add-todo', newTodo)
                this.title = ''
            }
             
        }
    }
}
</script>

<style scopede>
    form {
        display: flex;
    }
    input {
        width: 500px;       
    }

    button {
        background-color: rgb(219, 104, 210);
        font-size: medium;
        margin: 5px;
        font-weight: 700;
        color: white;
        
    }
</style>