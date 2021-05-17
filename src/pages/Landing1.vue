<template>
  <Layout>
    <div>
      <section
        class="hero"
        :style="{ 'background-color': '#ffffff' }"
      >
        <div class="fr-container">
          <div class="fr-grid-row fr-grid-row--gutters">
            <div class="fr-col">
              <div class="promise">
                <h1>{{ $page.landing1.title || "Proposition de  valeur"}}</h1>
                <p>
{{ $page.landing1.excerpt || "Descrption/détail"}}               </p>
               
              </div>
              <div class="promise">
                 <div class="action all-events">
                    
              <g-link to="/" class="fr-btn fr-btn--md"
                >Lorem ipsum </g-link
              >

               
            </div>
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
                    href="/landing1"
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
                <h2 class="fr-card__title">Template #2</h2>
                <p class="fr-card__desc">
                  La même chose que le template #1, mais avec une belle image pour illustrer. Ça peut être un visuel du (futur) produit,
                  ou une illustration sympa. 
                </p>
                <div class="call-to-action">
                  <a
                    href="/landing2"
                    aria-label="'Demander de l'aide (nouvel onglet)'"
                    target="_blank"
                    class="fr-btn fr-btn--sm fr-fi-external-link-line fr-btn--icon-right"
                    >Je veux voir ça</a
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
                <h2 class="fr-card__title">Template #3</h2>
                <p class="fr-card__desc">
                 On va pas te mentir : y a pas de template #3. Par contre, si tu as une idée de landing page, qui pourrait être sympa et être utilisé 
                 par d'autre startup d'état, balance moi un ptit email.
                </p>
                <div class="call-to-action">
                   <a
                    href="mailto:chaib.martinez@beta.gouv.fr"
                    aria-label="'Demander de l'aide (nouvel onglet)'"
                    target="_blank"
                    class="fr-btn fr-btn--sm fr-fi-external-link-line fr-btn--icon-right"
                    >J'ai une idée</a
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

      <section class="designers">
        <div class="fr-container">
          <div class="fr-grid-row fr-grid-row--gutters">
            <div class="fr-col">
              <h1>Comment créer sa landing page?</h1>
            </div>
          </div>

          <div class="fr-grid-row fr-grid-row--gutters">
            <div class="fr-col-12 fr-col-md-3">
              <div class="fr-card fr-card--no-arrow">
                <div class="fr-card__body">
                  <h2 class="fr-card__title">#1 un compte Github</h2>
                  <p class="fr-card__desc">
                    Il te faut un compte Github qui soit lié a beta.gouv. Ca prouve que tu es membre de la communauté et 
                    ca nous permet de savoir qui a fait quoi. 
                  </p>
                
                </div>
                <figure
                  class="illustration"
                  :style="{ 'background-image': 'url(./images/welcome.svg)' }"
                ></figure>
              </div>
            </div>

            <div class="fr-col-12 fr-col-md-3">
              <div class="fr-card fr-card--no-arrow">
                <div class="fr-card__body">
                  <h2 class="fr-card__title">#2 choisi ton template</h2>
                  <p class="fr-card__desc">
                   Ok, c'est rapide car il y en a que 2, mais bon, ca va peut etre changer. Chaque template a des zones à personnaliser.
                   Il te faudra bien te rappeler de leur nom pour la suite. 
                  </p>
                
                </div>
                <figure
                  class="illustration"
                  :style="{ 'background-image': 'url(./images/interview.svg)' }"
                ></figure>
              </div>
            </div>

            <div class="fr-col-12 fr-col-md-3">
              <div class="fr-card fr-card--no-arrow">
                <div class="fr-card__body">
                  <h2 class="fr-card__title">#3 saisie le contenu </h2>
                  <p class="fr-card__desc">
                    Il te faudra saisir chaque élément : nom du produit, lien du call to action , slogan, etc . Certains sont facultatifs. Tu pourras faire des changement à tout moment.
                  </p>
               
                </div>
                <figure
                  class="illustration"
                  :style="{
                    'background-image': 'url(./images/documentation.svg)',
                  }"
                ></figure>
              </div>
            </div>

            <div class="fr-col-12 fr-col-md-3">
              <div class="fr-card fr-card--no-arrow">
                <div class="fr-card__body">
                  <h2 class="fr-card__title">#4 publie ta page</h2>
                  <p class="fr-card__desc">
                   Pour savoir à quoi ca va ressembler, tu dois la publier. Pas de stress, elle n'est visible que de ceux qui on le line
                   pour la consulter (que toi au début)
                  </p>
                
                </div>
                <figure
                  class="illustration"
                  :style="{
                    'background-image': 'url(./images/cafe-designers.svg)',
                  }"
                ></figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
</template>

<page-query>
query Landing1 ($id: ID!) {
  landing1(id: $id) {
    title
    excerpt
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
  height: 35em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -0em;

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
