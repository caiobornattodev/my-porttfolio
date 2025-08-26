<template>
    <div class="display-flex-start">
        <my-profile-card></my-profile-card>
        <div class="page">
            <container-box>
                <h1>Sobre</h1>
                <p>
                    Desenvolvedor com 3 anos de experiência com tecnologias de backend e frontend com foco
                    em C# .NET.<br /> Experiência com desenvolvimento de aplicações,APIs REST,implementação
                    de soluções de IA.
                    <br />Domínio em tecnologias como C#,JavaScript,/TypeScript,
                    EntityFramework, jQuery, Git, SQL, Node.js, com conhecimento em frameworks como
                    Angular e VueJS.
                </p>
            </container-box>
            <container-box class="mt-15">
                <h1>Idiomas</h1>
                <ul>
                    <li>Português (Nativo)</li>
                    <li>Inglês (Avançado)</li>
                </ul>
            </container-box>
        </div>
    </div>
</template>

<script>
import MyProfileCard from '../components/MyProfileCard.vue';

export default {
    components: {
        MyProfileCard
    }
}
</script>

<style>
.page {
  margin-left: 20px;
  margin-right: auto;
  width: 100%;
}
</style>