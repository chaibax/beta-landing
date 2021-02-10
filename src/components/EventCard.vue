<template>

    <div class="rf-card rf-card--no-arrow"> <!-- g-link  :to="'events/' + event.id" -->
        <div class="rf-card__img" :style="{ 'background-image': 'url(' + cover + ')'}">
            <p class="rf-tag">{{ event.type.name }}</p>
        </div>
        <div class="rf-card__body">
            <time class="rf-card__detail">{{ event.debut | formatDateTime }}</time>
            <h4 class="rf-card__title">{{ event.sujet }}</h4>
            <p class="rf-card__desc">{{ event.name }}</p>
            <!--<p class="rf-card__detail">pour {{ event.type.pour }}</p>-->
            <div class="action" v-if="event.inscription">
                <a :href="event.inscription" target="_blank" class="rf-btn rf-btn--sm rf-fi-external-link-line rf-btn--icon-right">Participer</a>
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
            moment.locale('fr', {
                calendar: {
                    sameElse : 'ddd Do MMMM à HH[h]mm'
                }
            });
            return moment(value).calendar();
        }
    },
};
</script>

<style scoped>
    time {
        color: #00AC8C;
        font-weight: 600;
    }

    .rf-card__img {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;

        text-align:center;
    }

    .rf-tag {
        display: inline-block;
        background: #FFF;
        font-weight: 600;
    }


    .action {
        position: absolute;
        bottom: 1em;
    }
    .rf-btn {
        border-radius: 100px;
        background: #3355e3;
    }

    .rf-card {
        border-radius: 5px;
        box-shadow: 0 2px 0 0 #EEE;
    }

    .rf-card__title {
        font-size: 1.2em;
    }

    a {
        box-shadow: none;
    }
</style>
