<template>
  <Layout>
    <div>
      <section
        class="hero"
        :style="{ 'background-image': 'url(./images/home.svg)' }"
      >
        <div class="fr-container">
          <div class="fr-grid-row fr-grid-row--gutters">
            <div class="fr-col">
              <div class="promise">
                <h1>Les startups d'état ont besoin de landing pages #1!</h1>
                <p>
                 Ca devrait être simple de faire une landing page pour tester une proposition de valeur,
                 récupérer des beta testeurs pendant la phase d'investigation, personnaliser son message pour un type
                 de prescripteur, optimiser sa campagne Google Adwords, Facebook Ads ou son SEO avec des landing page
                 dédiées.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--gutters">
          <div class="fr-col-12 fr-col-md-4">
            <div class="fr-card fr-card--no-arrow">
              <div class="fr-card__body">
                <h2 class="fr-card__title">Template #1</h2>
                <p class="fr-card__desc">
                 Pourquoi faire compliqué quand on peut faire simple. Une proposition de valeur,
                 un slogan, un bouton avec ce que vous voulez derrière. What else?
                </p>
                <div class="call-to-action">
                  <a
                    href="/"
                    aria-label="'Réserver un check-up (nouvel onglet)'"
                    target="_blank"
                    class="fr-btn fr-btn--sm fr-fi-external-link-line fr-btn--icon-right"
                    >Je veux voir ça</a
                  >
                </div>
              </div>
              <div
                class="fr-card__img"
                :style="{
                  'background-image': 'url(./images/docteur-design.svg)',
                }"
              ></div>
            </div>
          </div>

          <div class="fr-col-12 fr-col-md-4">
            <div class="fr-card fr-card--no-arrow">
              <div class="fr-card__body">
                <h2 class="fr-card__title">Accompagnement</h2>
                <p class="fr-card__desc">
                  Pour être accompagné pour une problématique spécifique :
                  organisation d'atelier, recherche utilisateur, conseil UX...
                </p>
                <div class="call-to-action">
                  <a
                    href="https://airtable.com/shr6ASfxJDIz0RLhR"
                    aria-label="'Demander de l'aide (nouvel onglet)'"
                    target="_blank"
                    class="fr-btn fr-btn--sm fr-fi-external-link-line fr-btn--icon-right"
                    >Demander de l'aide</a
                  >
                </div>
              </div>
              <div
                class="fr-card__img"
                :style="{ 'background-image': 'url(./images/designers.svg)' }"
              ></div>
            </div>
          </div>

          <div class="fr-col-12 fr-col-md-4">
            <div class="fr-card fr-card--no-arrow">
              <div class="fr-card__body">
                <h2 class="fr-card__title">Formation</h2>
                <p class="fr-card__desc">
                  Des formations et guides pratiques pour vous aider tout au
                  long d'évolution de votre produit.
                </p>
                <div class="call-to-action">
                  <g-link to="/guides" class="fr-btn fr-btn--sm"
                    >Découvrir nos guides</g-link
                  >
                </div>
              </div>
              <div
                class="fr-card__img"
                :style="{ 'background-image': 'url(./images/guides.svg)' }"
              ></div>
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
import moment from "moment";
import EventCard from "~/components/EventCard.vue";
moment.updateLocale("fr", {});

export default {
  metaInfo: {
    title: "Du design pour votre Startup d'État",
  },

  components: {
    EventCard,
  },

  computed: {
    incomingEvents: function () {
      return this.$page.events.edges
        .filter((event) => moment(event.node.date) >= moment().startOf("day"))
        .sort((a, b) => moment(a.node.date) - moment(b.node.date))
        .slice(0, 4);
    },
  },
};
</script>

<style lang="scss">
.hero {
  height: 30em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -4em;

  //background: url('');
  background-size: cover;

  .promise {
    background: rgba(#fff, 1);
    padding: 2em;
    max-width: 55em;
    margin: auto;
    //max-width: 700px;
    //border: 1px solid #EDEDED;
  }

  h1 {
    text-align: center;
  }

  p {
    text-align: center;
    margin: auto;
    max-width: 45em;
    line-height: 1.5;
  }
}

.designers .fr-card {
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
  background: #fff;
  margin-bottom: 3em;
}

section.designers:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 3em;
  background: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0) 49%,
    #fff 50%
  );
  top: -3em;
  left: 0;
}

section.designers:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 3em;
  background: linear-gradient(
    to top right,
    rgba(255, 255, 255, 0) 49%,
    #fff 50%
  );
  bottom: -3em;
  left: 0;
}
</style>
