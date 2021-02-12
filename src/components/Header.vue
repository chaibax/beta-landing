<template>
  <header class="rf-header">
      <div class="rf-container">
          <div class="rf-header__body">
              <div class="rf-header__brand">
                  <span class="rf-logo">
                      <span class="rf-logo__title">République
                      <br>
                       française</span>
                  </span>
              </div>
              <div class="rf-header__navbar">
                  <div class="rf-service">
                      <a class="rf-service__title" href="/">
                          {{ service_name }}
                      </a>
                      <p class="rf-service__tagline">de l'incubateur beta.gouv.fr</p>
                  </div>
              </div>
          </div>

          <nav id="header-navigation" class="rf-nav" role="navigation" aria-label="Menu principal">
             <ul class="rf-nav__list">
                <li class="rf-nav__item">
                   <g-link class="rf-link" to="/" target="_self">Services</g-link>
                </li>
                <li class="rf-nav__item">
                   <g-link class="rf-link" to="/events" target="_self">Évènements</g-link>
                </li>
                <li class="rf-nav__item">
                   <g-link class="rf-link" to="/guides" target="_self">Guides</g-link>
                </li>
                <li class="rf-nav__item">
                   <g-link class="rf-link" to="/stats" target="_self">Statistiques</g-link>
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
  }

</script>

<style lang="scss">
      .rf-link {
        &.active--exact {
          color: var(--bf500);
          box-shadow: inset 0 -2px var(--bf500);
        }
      }
</style>
