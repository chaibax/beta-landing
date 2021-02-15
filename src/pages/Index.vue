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
                         <div class="rf-card rf-card--no-arrow">
                            <div class="rf-card__img" :style="{ 'background-image': 'url(./images/docteur-design.svg)'}">
                            </div>
                            <div class="rf-card__body">
                                <h2 class="rf-card__title">Pour un check-up</h2>
                                <p class="rf-card__desc">Une heure avec deux designers pour parler de votre produit, répondre à vos question, et identifier des pistes d'amélioration pour vos usagers</p>
                                <div class="call-to-action">
                                    <a href="/" aria-label="'Réserver (nouvelle fenêtre)'" target="_blank" class="rf-btn rf-btn--sm rf-fi-external-link-line rf-btn--icon-right">Réserver une session</a>
                                </div>
                            </div>
                         </div>
                    </div>

                    <div class="rf-col-12 rf-col-md-4" >
                         <div class="rf-card rf-card--no-arrow">
                            <div class="rf-card__img" :style="{ 'background-image': 'url(./images/designers.svg)'}">
                            </div>
                            <div class="rf-card__body">
                                <h2 class="rf-card__title">Pour être accompagné</h2>
                                <p class="rf-card__desc">Pour être accompagnés, organiser un atelier, ou juste pour un conseil, faites appel à à la <a href="https://startups-detat.slack.com/archives/CV6B2G6JD" target="_blank">@team-designers-transverses <span class="rf-fi-external-link-line"></span></a> sur Slack, ou donnez-nous quelques informations rapide sur votre besoin</p>
                                <div class="call-to-action">
                                    <a href="https://airtable.com/shr6ASfxJDIz0RLhR" aria-label="'Réserver (nouvelle fenêtre)'" target="_blank" class="rf-btn rf-btn--sm rf-fi-external-link-line rf-btn--icon-right">Demander de l'aide</a>
                                </div>
                            </div>
                         </div>
                    </div>

                    <div class="rf-col-12 rf-col-md-4" >
                         <div class="rf-card rf-card--no-arrow">
                            <div class="rf-card__img" :style="{ 'background-image': 'url(./images/guides.svg)'}">
                            </div>
                            <div class="rf-card__body">
                                <h2 class="rf-card__title">Pour vous former</h2>
                                <p class="rf-card__desc">Découvrez nos guides pratiques et formations pour vous aider tout au long d'évolution de votre produit</p>
                                <div class="call-to-action">
                                    <g-link to="/guides" aria-label="'Réserver (nouvelle fenêtre)'" target="_blank" class="rf-btn rf-btn--sm">Découvrez nos guides</g-link>
                                </div>
                            </div>
                         </div>
                    </div>

                </div>
            </div>

            <section class="designers">
            <div class="rf-container">

                <div class="rf-grid-row rf-grid-row--gutters">
                    <div class="rf-col">
                        <h1>Designers de la communauté !</h1>
                    </div>
                </div>

                <div class="rf-grid-row rf-grid-row--gutters">
                    <div class="rf-col-12 rf-col-md-3" >
                         <div class="rf-card rf-card--no-arrow">
                            <figure class="illustration" :style="{ 'background-image': 'url(./images/welcome.svg)'}"></figure>
                            <div class="rf-card__body">
                                <h2 class="rf-card__title">Vous venez d'arriver ?</h2>
                                <p class="rf-card__desc">Bienvenue, faisons connaissance ! Vous avez probablement des questions :)</p>
                                <div class="call-to-action">
                                    <a href="https://startups-detat.slack.com/archives/CV6B2G6JD" aria-label="'Venez dire bonjour (nouvelle fenêtre)'" target="_blank" class="rf-btn rf-btn--sm rf-fi-external-link-line rf-btn--icon-right">Venez dire bonjour</a>
                                </div>
                            </div>
                         </div>
                    </div>

                    <div class="rf-col-12 rf-col-md-3" >
                         <div class="rf-card rf-card--no-arrow">
                            <figure class="illustration" :style="{ 'background-image': 'url(./images/interview.svg)'}"></figure>
                            <div class="rf-card__body">
                                <h2 class="rf-card__title">Échangez entre designers</h2>
                                <p class="rf-card__desc">Demandez conseil, partagez votre travailler, demandez une session de pair design sur le channel Slack dédié</p>
                                <div class="call-to-action">
                                    <a href="https://startups-detat.slack.com/archives/C010EFL3EQ4" aria-label="'Rejoindre Slack (nouvelle fenêtre)'" target="_blank" class="rf-btn rf-btn--sm rf-fi-external-link-line rf-btn--icon-right">Rejoindre Slack</a>
                                </div>
                            </div>
                         </div>
                    </div>

                    <div class="rf-col-12 rf-col-md-3" >
                         <div class="rf-card rf-card--no-arrow">
                            <figure class="illustration" :style="{ 'background-image': 'url(./images/documentation.svg)'}"></figure>
                            <div class="rf-card__body">
                                <h2 class="rf-card__title">Besoin de ressources ?</h2>
                                <p class="rf-card__desc">La documentation design pourra vous aider</p>
                                <div class="call-to-action">
                                    <a href="https://doc.incubateur.net/design/" aria-label="'Voir la documentation (nouvelle fenêtre)'" target="_blank" class="rf-btn rf-btn--sm rf-fi-external-link-line rf-btn--icon-right">Voir la documentation</a>
                                </div>
                            </div>
                         </div>
                    </div>

                    <div class="rf-col-12 rf-col-md-3" >

                         <div class="rf-card rf-card--no-arrow">
                            <figure class="illustration" :style="{ 'background-image': 'url(./images/cafe-designers.svg)'}"></figure>
                            <div class="rf-card__body">
                                <h2 class="rf-card__title">Participez aux cafés designers</h2>
                                <p class="rf-card__desc">Des rendez-vous réguliers pour échanger sur notre pratique et nos expériences</p>
                                <div class="call-to-action">
                                    <a href="/" aria-label="'Prochains évènements'" target="_blank" class="rf-btn rf-btn--sm rf-fi-external-link-line rf-btn--icon-right">Prochains évènements</a>
                                </div>
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

                <div class="rf-grid-row rf-grid-row--gutters">
                    <div class="rf-col-12 rf-col-md-3" v-for="(edge, index) in incomingEvents" :key="edge.node.id" >
                        <EventCard :event="edge.node" />
                    </div>
                </div>

                <div class="rf-grid-row rf-grid-row--gutters">
                    <div class="rf-col-12">
                        <div class="action all-events">
                            <g-link to="/events" aria-label="'Réserver (nouvelle fenêtre)'" target="_blank" class="rf-btn rf-btn--md">Voir tous les évènements</g-link>
                    </div>
                    </div>
                </div>

            </div>

        </div>

  </Layout>
</template>

<page-query>
  query Events {
    events: allEvent(sortBy: "date", order: ASC) {
      edges {
        node {
          id
          titre
          pour
          date
          inscription
          compteRendu
          type {
            name
            pour
            illustration {
              url
            }
          }
        }
      }
    }
  }
</page-query>

<script>
import moment from 'moment'
import EventCard from "~/components/EventCard.vue";
moment.updateLocale('fr', {})


export default {
    metaInfo: {
        title: 'Évènements',
    },

    components: {
        EventCard,
    },

    computed: {
        incomingEvents: function () {
            return this.$page.events.edges
                .filter(event => moment(event.node.date) >= moment().startOf('day'))
                .sort( (a,b) => moment(a.node.date) - moment(b.node.date))
                .slice(0,4);
        },
    }
};
</script>

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


.action.all-events {
    display: flex;
    align-items: center;
    justify-content: center;
}

.illustration {
    display: block;
    //border-radius: 200px;
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
