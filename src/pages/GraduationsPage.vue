<template>
    <container-box>
        <h2>Formações completas: </h2>
    </container-box>
    <container-box :class="grad.marginTop ? 'mt-15' : null" v-for="grad in graduations" :key="grad.name">
        <div class="display-flex-start">
            <img class="logo" :src="grad.imgSrc" alt="logo">
            <div class="description">
                <h3>{{ grad.name }}</h3>
                <p><strong>Tipo de Curso: </strong>{{ grad.type }}</p>
                <span>
                    <v-icon name="fa-regular-calendar-alt" /> {{ grad.dateStart }} - {{ grad.dateEnd }}
                </span>
            </div>
        </div>
    </container-box>
</template>

<script>
export default {
    data() {
        return {
            graduations: [
                { name: 'Senai Norte (Joinville/SC)', type: 'Ensino Médio', dateStart: '2017', dateEnd: '2019', imgSrc: require('../assets/senai_logo.png'), marginTop : true },
                { name: 'Escola Tecnica Tupy (Joinville/SC)', type: 'Tecnico em T.I', dateStart: '2020', dateEnd: '2021', imgSrc: require('../assets/ett_logo.jpeg'), marginTop: true },
            ]
        }
    }
}
</script>