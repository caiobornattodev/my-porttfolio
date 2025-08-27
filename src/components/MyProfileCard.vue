<template>
    <container-box>
        <img class="photo" src="../assets/me.jpg" alt="">
        <h3>Caio Vinícius Bornatto</h3>

        <section>
            <span>
                <v-icon name="fa-birthday-cake" />
                25/12/2000
            </span>
        </section>
        <section>
            <span>
                <v-icon name="fa-map-marker-alt" />
                Joinvile/SC
            </span>
        </section>
        <section>
            <span>
                <v-icon name="fa-regular-envelope" />
                caiobornatto@gmail.com
            </span>
        </section>
        <section>
            <span>
                <v-icon name="fa-whatsapp" scale="1.2" />
                (47) 989210719
            </span>
        </section>
        <div class="media">
            <a title="GitHub" target="_blank" href="https://github.com/caiobornattodev">
                <v-icon name="fa-github-square" scale="2.5" />
            </a>
            <a title="Linkedin" target="_blank" href="https://www.linkedin.com/in/caio-vinicius-bornatto">
                <v-icon name="fa-linkedin" scale="2.5" />
            </a>
        </div>
    </container-box>
</template>


<style scoped>
section {
    margin-top: 13px;
}

.media {
    display: flex;
    margin-top: 25px;
    border-top: 1px solid gray;
    justify-content: center;
}

.media > a > svg {
    color: inherit;
}

.media a {
    margin-top: 15px;
}
</style>