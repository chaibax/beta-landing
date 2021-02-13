<template>
  <Layout>

        <div>

            <section class="hero">
            <div class="rf-container">
                <div class="rf-grid-row rf-grid-row--gutters">
                    <div class="rf-col">
                        <h1>Start-ups, vous avez besoin de design !</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur ipsa perferendis omnis, obcaecati possimus vero minus eius? Labore, eveniet, numquam.</p>
                    </div>
                </div>
            </div>
            </section>

            <div class="rf-container">
                <div class="rf-grid-row rf-grid-row--gutters">

                    <div class="rf-col-12 rf-col-md-4" >
                         <div class="rf-card">
                            <div class="rf-card__img" :style="{ 'background-image': 'url(./images/docteur-design.svg)'}">
                            </div>
                            <div class="rf-card__body">
                                <h2 class="rf-card__title">Pour un check-up</h2>
                                <p class="rf-card__desc">Docteur Design c'est une heure avec deux designers pour échanger sur votre produit, répondre à vos question, identifier des pistes d'amélioration pour vos usagers</p>
                            </div>
                         </div>
                    </div>

                    <div class="rf-col-12 rf-col-md-4" >
                         <div class="rf-card">
                            <div class="rf-card__img" :style="{ 'background': '#FFF'}">
                            </div>
                            <div class="rf-card__body">
                                <h2 class="rf-card__title">Pour être accompagné</h2>
                                <p class="rf-card__desc">Pour être accompagnés, organiser un atelier, ou juste pour un conseil, faites appel à à la @team-designers-transverses sur Slack, ou donnez-nous quelques informations rapide</p>
                            </div>
                         </div>
                    </div>

                    <div class="rf-col-12 rf-col-md-4" >
                         <div class="rf-card">
                            <div class="rf-card__img" :style="{ 'background-image': 'url()'}">
                            </div>
                            <div class="rf-card__body">
                                <h2 class="rf-card__title">Pour vous former</h2>
                                <p class="rf-card__desc">Faites appel à nous</p>
                            </div>
                         </div>
                    </div>

                </div>
            </div>

            <section class="designers">
            <div class="rf-container">

                <div class="rf-grid-row rf-grid-row--gutters">
                    <div class="rf-col">
                        <h1>Designers de la communautés !</h1>
                    </div>
                </div>

                <div class="rf-grid-row rf-grid-row--gutters">
                    <div class="rf-col-12 rf-col-md-3" >
                         <div class="rf-card">
                            <figure class="illustration" :style="{ 'background-image': 'url(./images/startups.svg)'}"></figure>
                            <div class="rf-card__body">
                                <h2 class="rf-card__title">Vous venez d'arriver ?</h2>
                                <p class="rf-card__desc">Bienvenue, faisons connaissance ! Vous avez probablement des questions :)</p>
                            </div>
                         </div>
                    </div>

                    <div class="rf-col-12 rf-col-md-3" >
                         <div class="rf-card">
                            <figure class="illustration" :style="{ 'background-image': 'url(./images/interview.svg)'}"></figure>
                            <div class="rf-card__body">
                                <h2 class="rf-card__title">Échangez entre designers</h2>
                                <p class="rf-card__desc">Demandez conseil, partagez votre travailler, demandez une session de pair design sur le channel Slack dédié</p>
                            </div>
                         </div>
                    </div>

                    <div class="rf-col-12 rf-col-md-3" >
                         <div class="rf-card">
                            <figure class="illustration" :style="{ 'background-image': 'url(./images/community.svg)'}"></figure>
                            <div class="rf-card__body">
                                <h2 class="rf-card__title">Besoin de ressources ?</h2>
                                <p class="rf-card__desc">La documentation design pourra vous aider</p>
                            </div>
                         </div>
                    </div>

                    <div class="rf-col-12 rf-col-md-3" >

                         <div class="rf-card">
                            <figure class="illustration" :style="{ 'background-image': 'url(./images/docteur-design.svg)'}"></figure>
                            <div class="rf-card__body">
                                <h2 class="rf-card__title">Pour un check-up</h2>
                                <p class="rf-card__desc">Docteur Design c'est une heure avec deux designers pour échanger sur votre produit, répondre à vos question, identifier des pistes d'amélioration pour vos usagers</p>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
            </section>


            <div class="rf-container">

                <div class="rf-grid-row rf-grid-row--gutters">
                    <div class="rf-col">
                        <h1>Nos évènements à venir</h1>
                    </div>
                </div>

                <div class="rf-col-12 rf-col-md-3" >
                     <div class="rf-card">
                        <div class="rf-card__img" :style="{ 'background-image': 'url()'}">
                        </div>
                        <div class="rf-card__body">
                            <h2 class="rf-card__title">Pour un check-up</h2>
                            <p class="rf-card__desc">Docteur Design c'est une heure avec deux designers pour échanger sur votre produit, répondre à vos question, identifier des pistes d'amélioration pour vos usagers</p>
                        </div>
                     </div>
                </div>



            </div>

        </div>

  </Layout>
</template>

<style lang="scss">


.hero {
    height: 30em;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        text-align:center;
    }

    p {
        max-width: 40em;
        text-align: center;
        margin:auto;
    }

}

.designers .rf-card {
    background: none;
}

.illustration {
    display: block;
    border-radius: 200px;
    overflow: hidden;

    width: 60%;
    padding-bottom: 60%;
    margin: 0 20%;


    background-size: cover;
    background-position: center center;
}



section.designers {
    padding: 0 0 2em;
    position: relative;
    margin: 3em 0;
}

section.designers {
    background: #FFF;
    margin-bottom: 3em;
}



section.designers:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3em;
    background: linear-gradient(to bottom right, rgba(255,255,255,0) 49%, #FFF 50%);
    top: -3em;
    left: 0;
}

section.designers:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 3em;
    background: linear-gradient(to top right, rgba(255,255,255,0) 49%, #FFF 50%);
    bottom: -3em;
    left: 0;
}


</style>
