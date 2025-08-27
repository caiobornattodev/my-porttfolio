<template>
    <header>
        <nav>
            <h1>Meu Portfólio</h1>
            <ul>
                <li>
                    <router-link to="/aboutMe">Sobre</router-link>
                </li>
                <li class="border-left">
                    <router-link to="/tecnologies" class="ml-5">Tecnologias</router-link>
                </li>
                <li class="border-left">
                    <router-link to="/graduations" class="ml-5">Formação</router-link>
                </li>
                <li class="border-left">
                    <router-link to="/experiences" class="ml-5">Experiência profissional</router-link>
                </li>
            </ul>
            <v-icon 
                title="Trocar tema" 
                class="icon" 
                name="fa-adjust" 
                fill="white" 
                scale="2.2" 
                @click="toggleTheme()" 
            />
        </nav>
    </header>
</template>

<script>
export default {
    emits: ['change-theme'],
    methods: {
        toggleTheme() {
            this.$emit('change-theme')
        }
    }
}
</script>

<style scoped>
header {
    display: flex;
    padding: 10px;
    margin-top: 25px;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 10px;
    width: auto;
    background-color: dodgerblue;
}

header nav {
    display: flex;
    width: 100%;
}

header ul {
    list-style: none;
    display: flex;
}

header a {
    color: white;
    text-decoration: none;
    display: inline-block;
}

header h1 {
    color: white;
    margin-top: 23px;
    margin-left: 15px;
    margin-right: 0;
}

li {
    margin-right: 10px;
    font-size: 30px;
    padding: 5px;
}

.border-left {
    border-left: 2px solid white;
}

.icon {
    margin-top: 17px;
    margin-bottom: 0px;
    margin-left: auto;
    margin-right: 7px;
    cursor: pointer;
}
</style>