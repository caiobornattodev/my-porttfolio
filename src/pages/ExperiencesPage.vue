<template>
    <container-box>
        <h2>Minhas experiências: </h2>
    </container-box>
    <container-box :class="experience.marginTop ? 'mt-15' : null" v-for="experience in experiences"
        :key="experience.title">
        <div class="display-flex-start">
            <img class="logo" :src="experience.imgSrc" alt="logo">
            <div class="description">
                <h3>{{ experience.title }}</h3>
                <p><strong>Cargo: </strong>{{ experience.role }}</p>
                <p><strong>Funções: </strong><span v-html="experience.description"></span></p>
                <span>
                    <v-icon name="fa-regular-calendar-alt" /> {{ experience.dateStart }} - {{ experience.dateEnd }}
                </span>
            </div>
        </div>
    </container-box>
</template>

<script>
export default {
    data() {
        return {
            experiences: [
                {
                    title: 'BR Condos',
                    role: 'Desenvolvedor FullStack Junior',
                    description: `Modificação do software BRCondos para correção de erros, atualização de interfaces e
                    melhoria de desempenho. Implementação de IAs em módulos para geração de texto e
                    consulta de documentos.`,
                    dateStart: '03/2023',
                    dateEnd: '08/2024',
                    imgSrc: require('../assets/brcondos_logo.jpeg'),
                    marginTop: true
                },
                {
                    title: 'Axe Tecnologia',
                    role: 'Desenvolvedor Junior',
                    description: `Desenvolvimento de aplicações e APIs REST, manutenção
                    de aplicações Windows Forms, <br />desenvolvimento de serviços para integração com
                    WhatsApp e importação de NF-e para SAP Business One.`,
                    dateStart: '01/2022',
                    dateEnd: '02/2023',
                    imgSrc: require('../assets/axetecnologia_logo.jpeg'),
                    marginTop: true
                }
            ]
        }
    }
}
</script>

