<template>
  <div class="fr-card fr-card--no-arrow">
    <!-- g-link  :to="'events/' + event.id" -->

    <div class="fr-card__body">
      <time class="fr-card__detail" :datetime="event.debut">{{
        event.date | formatDateTime
      }}</time>
      <h2 v-if="event.titre" class="fr-card__title">{{ event.titre }}</h2>
      <p class="fr-card__desc">
        {{ event.name }}
        <span class="fr-tg">{{ event.type.pour }}</span>
      </p>

      <div class="action" v-if="event.inscription">
        <!-- TODO : mettre la date dans le label aria -->
        <a
          v-if="event.inscription"
          :href="event.inscription"
          aria-label="'Réserver (nouvelle fenêtre)'"
          target="_blank"
          class="fr-btn fr-btn--sm fr-fi-external-link-line fr-btn--icon-right"
          >Réserver</a
        >
      </div>
    </div>
    <div
      class="fr-card__img"
      :style="{ 'background-image': 'url(' + cover + ')' }"
    >
      <p class="fr-tag">{{ event.type.name }}</p>
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
      return this.event.type.illustration[0] !== undefined
        ? this.event.type.illustration[0].url
        : "";
    },
  },

  filters: {
    formatDateTime: function (value) {
      moment.updateLocale("fr", {
        calendar: {
          sameElse: "ddd Do MMMM à HH[h]mm",
        },
      });
      return moment(value).calendar();
    },
  },
};
</script>

<style lang="scss" scoped>
time {
  color: #008262;
  font-weight: 600;
}

.fr-card__img {
  .fr-tag {
    background: #fff;
    font-weight: 600;
  }
}

.fr-tag {
  display: inline-block;
}

.action {
  margin-top: auto;
}

a {
  box-shadow: none;
}
</style>
