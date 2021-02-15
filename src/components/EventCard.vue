<template>

    <div class="rf-card rf-card--no-arrow"> <!-- g-link  :to="'events/' + event.id" -->
        <div class="rf-card__img" :style="{ 'background-image': 'url(' + cover + ')'}">
            <p class="rf-tag">{{ event.type.name }}</p>
        </div>
        <div class="rf-card__body">
            <time class="rf-card__detail" :datetime="event.debut">{{ event.date | formatDateTime }}</time>
            <h2 v-if="event.titre" class="rf-card__title">{{ event.titre }}</h2>
            <p class="rf-card__desc">{{ event.name }}
                <span class="rf-tg">{{ event.type.pour }}</span>
            </p>

            <div class="action" v-if="event.inscription">
                <!-- TODO : mettre la date dans le label aria -->
                <a v-if="event.inscription" :href="event.inscription" aria-label="'Réserver (nouvelle fenêtre)'" target="_blank" class="rf-btn rf-btn--sm rf-fi-external-link-line rf-btn--icon-right">Réserver</a>
            </div>

        </div>
     </div>

</template>

<script>
import moment from "moment";
export default {
    name: "EventCard",

    props: {
        event: Object,
    },

    computed: {
        cover: function () {
            return (this.event.type.illustration[0] !== undefined)
                ? this.event.type.illustration[0].url
                : "";
        },
    },

    filters: {
        formatDateTime: function(value) {
            moment.updateLocale('fr', {
                calendar: {
                    sameElse : 'ddd Do MMMM à HH[h]mm'
                }
            });
            return moment(value).calendar();
        }
    },
};
</script>

<style lang="scss" scoped>
    time {
        color: #008262;
        font-weight: 600;
    }

    .rf-card__img {

        .rf-tag {
            background: #FFF;
            font-weight: 600;
        }
    }


    .rf-tag {
        display: inline-block;
    }

    .action {
       margin-top: auto;
    }




    a {
        box-shadow: none;
    }
</style>
