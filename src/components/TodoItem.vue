<template>
    <div class="app">
    <li>
        <span v-bind:class="{done: todo.completed}">
                <input type="checkbox" 
                        v-on:change="todo.completed = !todo.completed">
                <strong>{{index + 1}}</strong>
                {{todo.title}}
        </span>
        <button class="rm" v-on:click="$emit('remove-todo', todo.id)"
        >&times;</button>
    </li>
</div>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
        required: true
    },
    index: Number
}
}
</script>

<style scoped>
    .app {
        min-height: 50px;
    }

    li {
        border: 1px solid #ccc;
        display: flex;
        justify-content: space-between; 
        padding: .5rem 2rem;
        margin-bottom: 1rem;
        font-weight: bold;
        font-size: large;       
    }
    .rm {
        background:  rgb(219, 104, 210);
        color:  #fff;
        border-radius: 50%;
        font-weight: bold;
    }
    input {
        margin-right: 1rem;
    }

    .done {
        text-decoration: overline underline;
        text-decoration-style: double;
        color: green;
    }
</style>