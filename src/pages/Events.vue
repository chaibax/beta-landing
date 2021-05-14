<template>
  <Layout>
    <div>
      <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--gutters">
          <div class="fr-col">
            <h1>Évènements à venir</h1>
          </div>
        </div>

        <div class="fr-grid-row fr-grid-row--gutters">
          <div
            class="fr-col-12 fr-col-md-3"
            v-for="(edge, index) in incomingEvents"
            :key="edge.node.id"
          >
            <EventCard :event="edge.node" />
          </div>
        </div>

        <div class="fr-grid-row fr-grid-row--gutters">
          <div class="fr-col">
            <h1>Évènements passés</h1>
          </div>
        </div>

        <div class="events">
          <div
            class="event"
            v-for="(edge, index) in pastEvents"
            :key="edge.node.id"
          >
            <p class="cell fr-tag">{{ edge.node.type.name }}</p>
            <time :datetime="edge.node.date">{{
              edge.node.date | formatDate
            }}</time>
            <div class="cell">
              <h2>{{ edge.node.titre || edge.node.type.name }}</h2>
              <a
                v-if="edge.node.compteRendu"
                :aria-label="'Compte rendu de ' + edge.node.titre"
                :href="edge.node.compteRendu"
                target="_blank"
                class="fr-link"
                >Voir le compte rendu<span
                  class="fr-fi-external-link-line"
                  aria-label="nouvelle fenêtre"
                ></span
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>


<script>
import Layout from "~/layouts/Default.vue";
import EventCard from "~/components/EventCard.vue";
import moment from "moment";

moment.updateLocale("fr", {});

export default {
  metaInfo: {
    title: "Évènements",
  },

  components: {
    Layout,
    EventCard,
  },

  computed: {
    incomingEvents: function () {
      return this.$page.events.edges
        .filter((event) => moment(event.node.date) >= moment().startOf("day"))
        .sort((a, b) => moment(a.node.date) - moment(b.node.date));
    },
    pastEvents: function () {
      return this.$page.events.edges
        .filter((event) => moment(event.node.date) <= moment().startOf("day"))
        .sort((a, b) => moment(b.node.date) - moment(a.node.date));
    },
  },

  filters: {
    formatDate: function (value) {
      return moment(value).format("LL");
    },
  },
};
</script>


<style lang="scss">
.events {
  display: table;
  border-collapse: separate;
  border-spacing: 1em;

  h2 {
    display: inline-block;
    margin: 0;
    margin-right: 1em;
    font-size: 1.1rem;
  }
}

.event {
  display: table-row;
}

.event .cell {
  display: table-cell;
}

.fr-link .fr-fi-external-link-line {
  margin-left: 0.5em;
  color: var(--bf500);
}

@media (max-width: 768px) {
  .events {
    border-spacing: 0;
  }
  .event {
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
    padding: 1em;
    color: var(--g-800);
    background-color: var(--g200);
    border-radius: 1rem;
  }
  .event .fr-tag {
    padding: 0;
  }
  .event time {
    font-size: 0.85em;
    color: #008262;
    font-weight: 600;
  }
  .event > div {
    padding: 0.5em 0;
  }
  .event .fr-link {
    font-size: 0.9em;
    padding: 0;
  }
}
</style>

