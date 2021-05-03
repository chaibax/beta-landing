<template>
  <header role="banner" class="fr-header">
    <div class="fr-header__body">
      <div class="fr-container">
        <div class="fr-header__body-row">
          <div class="fr-header__brand fr-enlarge-link">
            <div class="fr-header__brand-top">
              <div class="fr-header__logo">
                <a href="/" title="Accueil - Designers transverses">
                  <p class="fr-logo">
                    République
                    <br />Française
                  </p>
                </a>
              </div>
            </div>
            <div class="fr-header__service">
              <a href="/" title="Accueil - Designers transverses">
                <p class="fr-header__service-title">{{ service_name }}</p>
              </a>
              <p class="fr-header__service-tagline">
                de l'incubateur beta.gouv.fr
              </p>
            </div>
          </div>
        </div>
        <!--
        <nav
          id="header-navigation"
          class="fr-nav"
          role="navigation"
          aria-label="Menu principal"
        >
          <ul class="fr-nav__list">
            <li class="fr-nav__item">
              <g-link class="fr-nav__link" to="/" target="_self"
                >Services</g-link
              >
            </li>
            <li class="fr-nav__item">
              <g-link class="fr-nav__link" to="/events" target="_self"
                >Évènements</g-link
              >
            </li>
            <li class="fr-nav__item">
              <g-link class="fr-nav__link" to="/guides" target="_self"
                >Guides</g-link
              >
            </li>
            <li class="fr-nav__item">
              <g-link class="fr-nav__link" to="/stats" target="_self"
                >Statistiques</g-link
              >
            </li>
          </ul>
        </nav>
        -->
      </div>
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
.fr-nav__link {
  &.active--exact {
    color: var(--bf500);
    box-shadow: inset 0 -2px var(--bf500);
  }
}
</style>
