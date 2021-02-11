<template>
  <header class="rf-header">
      <div class="rf-container">
          <div class="rf-header__body">
              <div class="rf-header__brand">
                  <a class="rf-logo" href="/" title="République française">
                      <span class="rf-logo__title">République
                      <br>
                       française</span>
                  </a>
              </div>
              <div class="rf-header__navbar">
                  <div class="rf-service">
                      <a class="rf-service__title" href="/" title="Nom du service">
                          {{ name }}
                      </a>
                      <p class="rf-service__tagline">de l'incubateur beta.gouv.fr</p>
                  </div>
              </div>
          </div>

          <nav id="header-navigation" class="rf-nav" role="navigation" aria-label="Menu principal">
             <ul class="rf-nav__list">
              <!-- TODO add rf-nav__item--active when needed -->
                <li class="rf-nav__item">
                   <a class="rf-link" href="/" target="_self">Services</a>
                </li>
                <li class="rf-nav__item">
                   <a class="rf-link" href="/events" target="_self">Évènements</a>
                </li>
                <li class="rf-nav__item">
                   <a class="rf-link" href="/guides" target="_self">Guides</a>
                </li>
                <li class="rf-nav__item">
                   <a class="rf-link" href="/stats" target="_self">Statistiques</a>
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
        name: Object,
    },

};
</script>