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
                      <a class="rf-service__title" href="/" title="Nom du service">
                          {{ service_name }}
                      </a>
                      <p class="rf-service__tagline">de l'incubateur beta.gouv.fr</p>
                  </div>
              </div>
          </div>

          <nav id="header-navigation" class="rf-nav" role="navigation" aria-label="Menu principal">
             <ul class="rf-nav__list">
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
      service_name: {
        type: String,
        required: true,
      },
    },

    mounted () {
      //Highlight active link in menu and set aria-current
      var currentUrl = this.$route.path;
      var activeClass = 'active';
      var navLinks = document.querySelectorAll('.rf-nav a'); //all links inside the nav
      for (var i = 0, l = navLinks.length; i < l; i++) {
        const link = navLinks[i];
        const url = link.getAttribute('href');
        const span = document.createElement('span');
        if (url == "/") {
          if (currentUrl == url) {
            span.innerHTML = link.innerHTML;
            span.classList.add('rf-link');
            span.classList.add(activeClass);
            link.parentNode.setAttribute("aria-current", "page");
            link.parentNode.replaceChild(span, link);
          }
        }
        else if (currentUrl == url) {
          span.innerHTML = link.innerHTML;
          span.classList.add('rf-link');
          span.classList.add(activeClass);
          link.parentNode.setAttribute("aria-current", "page");
          link.parentNode.replaceChild(span, link);
        }
        else if (currentUrl.includes(url)) {
          span.innerHTML = link.innerHTML;
          span.classList.add('rf-link');
          span.classList.add(activeClass);
          link.parentNode.setAttribute("aria-current", "true");
          link.parentNode.replaceChild(span, link);
        }
      }
    }
  }

</script>

<style lang="scss">
      .rf-link {
        &.active {
          color: var(--bf500);
          box-shadow: inset 0 -2px var(--bf500);
        }
      }
</style>