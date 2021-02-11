<template>

    <Layout>
        <div>
            <div class="rf-container">

                <div class="rf-grid-row rf-grid-row--gutters">
                    <div class="rf-col">
                        <h1>Évènements à venir</h1>
                    </div>
                </div>

                <div class="rf-grid-row rf-grid-row--gutters">
                    <div class="rf-col-12 rf-col-md-3" v-for="(edge, index) in incomingEvents" :key="edge.node.id" >
                        <EventCard :event="edge.node" />
                    </div>
                </div>


                <div class="rf-grid-row rf-grid-row--gutters">
                    <div class="rf-col">
                        <h1>Évènements passés</h1>
                    </div>
                </div>


                <div class="events">
                    <div class="event" v-for="(edge, index) in pastEvents" :key="edge.node.id">
                        <p class="cell rf-tag">{{ edge.node.type.name }}</p>
                        <time :datetime="edge.node.debut">{{ edge.node.debut | formatDate }}</time>
                        <div class="cell">
                            <h2>{{ edge.node.titre || edge.node.type.name }}</h2>
                            <a v-if="edge.node.compteRendu" :aria-label="edge.node.titre" :href="edge.node.compteRendu" target="_blank" class="rf-link">Voir le compte rendu<span class="rf-fi-external-link-line" aria-label="nouvelle fenêtre"></span></a>
                        </div>
                    </div>
                 </div>

            </div>
        </div>
  </Layout>
</template>

<page-query>
  query Events {
    events: allEvent {
      edges {
        node {
          id
          titre
          pour
          debut
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
import Layout from "~/layouts/Default.vue";
import EventCard from "~/components/EventCard.vue";
import moment from 'moment'

moment.updateLocale('fr', {})

export default {
    metaInfo: {
        title: 'Évènements',
    },

    components: {
        Layout,
        EventCard,
    },

    computed: {
        incomingEvents: function () {
            return this.$page.events.edges
                .filter(event => moment(event.node.debut) >= moment().startOf('day'))
                .sort(function (a,b) { return  moment(a.node.debut) > moment(b.node.debut)} );

        },
        pastEvents: function () {
           return this.$page.events.edges
                .filter(event => moment(event.node.debut) <= moment().startOf('day'))
                .sort(function (a,b) { return  moment(a.node.debut) < moment(b.node.debut)} );
        }
    },

    filters: {
        formatDate: function(value) {
            return moment(value).format("LL");
        },
    }
};
</script>


<style>
    .events {
        display: table;
        border-collapse: separate;
        border-spacing: 1em;
    }

    .event {
        display: table-row;
    }

    .event .cell {
        display: table-cell;
    }

    h2 {
        display: inline-block;
        margin: 0;
        margin-right: 1em;
        font-size: 1.1rem;
    }

    .rf-link .rf-fi-external-link-line {
        margin-left: .5em;
        color: var(--bf500);
    }

    @media(max-width: 768px) {
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
        .event .rf-tag { padding: 0; }
        .event time { 
            font-size: 0.85em; 
            color: #008262;
            font-weight: 600; 
        }
        .event > div { padding: .5em 0; }
        .event .rf-link { 
            font-size: .9em;
            padding: 0; 
        }
    }


</style>

