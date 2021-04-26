<template>
  <Layout>
    <div>
      <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--gutters">
          <div class="fr-col">
            <h1>Guides pratiques</h1>
          </div>
        </div>

        <div class="fr-grid-row fr-grid-row--gutters">
          <div
            class="fr-col-12 fr-col-md-4"
            v-for="(edge, index) in incomingEvents"
            :key="edge.node.id"
          >
            <a class="fr-card" :href="edge.node.lien">
              <div class="fr-card__body">
                <h2 class="fr-card__title">{{ edge.node.titre }}</h2>
                <p class="fr-card__desc">{{ edge.node.description }}</p>
              </div>
              <div
                class="fr-card__img"
                :style="{
                  'background-image':
                    'url(' + edge.node.illustration[0].url + ')',
                }"
              ></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Events {
    events: allGuide {
        edges {
            node {
                titre
                description
                lien
                illustration {
                    url
                }
            }
        }
    }
}
</page-query>


<script>
import moment from "moment";

export default {
  metaInfo: {
    title: "Guides",
  },

  computed: {
    incomingEvents: function () {
      return this.$page.events.edges
        .filter((event) => moment(event.node.debut) >= moment())
        .sort(function (a, b) {
          return moment(a.node.debut) > moment(b.node.debut);
        });
    },
    pastEvents: function () {
      return this.$page.events.edges
        .filter((event) => moment(event.node.debut) <= moment())
        .sort(function (a, b) {
          return moment(a.node.debut) < moment(b.node.debut);
        });
    },
  },

  filters: {
    formatDate: function (value) {
      moment.locale("fr");
      return moment(value).format("LL");
    },
  },
};
</script>


<style lang="scss">
a {
  box-shadow: none;
}

.fr-card {
  border-radius: 5px;
  box-shadow: 0 2px 0 0 #eee !important;
}

.fr-card__img {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom center;

  text-align: center;

  &:before {
    padding-bottom: 70%;
  }
}
</style>

