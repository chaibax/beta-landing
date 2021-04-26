<template>
  <header class="fr-header">
    <div class="fr-container">
      <div class="fr-header__body">
        <div class="fr-header__brand">
          <span class="fr-logo">
            <span class="fr-logo__title"
              >République
              <br />
              française</span
            >
          </span>
        </div>
        <div class="fr-header__navbar">
          <div class="fr-service">
            <a class="fr-service__title" href="/">
              {{ service_name }}
            </a>
            <p class="fr-service__tagline">de l'incubateur beta.gouv.fr</p>
          </div>
        </div>
      </div>

      <nav
        id="header-navigation"
        class="fr-nav"
        role="navigation"
        aria-label="Menu principal"
      >
        <ul class="fr-nav__list">
          <li class="fr-nav__item">
            <g-link class="fr-link" to="/" target="_self">Services</g-link>
          </li>
          <li class="fr-nav__item">
            <g-link class="fr-link" to="/events" target="_self"
              >Évènements</g-link
            >
          </li>
          <li class="fr-nav__item">
            <g-link class="fr-link" to="/guides" target="_self">Guides</g-link>
          </li>
          <li class="fr-nav__item">
            <g-link class="fr-link" to="/stats" target="_self"
              >Statistiques</g-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",

  props: {
    service_name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.fr-link {
  &.active--exact {
    color: var(--bf500);
    box-shadow: inset 0 -2px var(--bf500);
  }
}
</style>
