<template>
  <div class="layout">
    <!-- TODO : problème de focus -->
    <div class="fr-skiplinks">
      <div class="fr-container">
        <ul class="fr-skiplinks__list">
          <li>
            <a class="fr-link" href="#content">Accéder au contenu</a>
          </li>
          <li>
            <a class="fr-link" href="#footer">Accéder au pied de page</a>
          </li>
        </ul>
      </div>
    </div>

    <Header :service_name="$static.metadata.siteName" />

    <div id="content" class="fr-my-0w">
      <slot />
    </div>

    <footer class="fr-footer" role="contentinfo" id="footer">
      <div class="fr-container">
        <div class="fr-footer__body">
          <div class="fr-footer__brand fr-enlarge-link">
            <a href="/" title="Retour à l’accueil">
              <p class="fr-logo">
                république
                <br>française
              </p>
            </a>
          </div>
          <div class="fr-footer__content">
            <p class="fr-footer__content-desc">
              Ces landings sont inspirées du travail des Designers Transverses de la communauté
              <a href="https://beta.gouv.fr/">beta.gouv.fr</a> et du système de design de l'État. Le
              <a href="https://github.com/betagouv/designers-transverses"
                >code source</a
              >
              est disponible en licence libre. Illustrations de
              <a href="https://storyset.com/people"> Freepik Storyset</a>.
            </p>
            <ul class="fr-footer__content-list">
              <li class="fr-footer__content-item">
                <a class="fr-footer__content-link" href="https://beta.gouv.fr">beta.gouv.fr</a>
              </li>
              <li class="fr-footer__content-item">
                <a class="fr-footer__content-link" href="https://doc.incubateur.net/design/">Documentation Design</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="fr-footer__bottom">
          <ul class="fr-footer__bottom-list">
            <li class="fr-footer__bottom-item">
              <a class="fr-footer__bottom-link" href="/accessibility">Accessibilité : non conforme</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>


<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Header from "~/components/Header.vue";

export default {
  components: {
    Header,
  },

  mounted() {
    //require('@gouvfr/all/dist/js/all.min.js');

    let src = "/js/header.min.js";
    let dsfr = document.createElement("script");
    dsfr.type = "text/javascript";
    dsfr.src = src;
    let scripts = document.querySelectorAll('[src="' + src + '"]');
    if (scripts.length > 0) {
      scripts[0].remove();
    }
    document.body.appendChild(dsfr);
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  background: #fcfcfc;
}

h1 {
  font-size: 2.2em;
}

.fr-service__title {
  font-weight: 700;
  font-size: 1.4rem;
}

.fr-header {
  box-shadow: none;
  border-bottom: 1px solid #f2f2f2;
}

.fr-footer {
  margin-top: 5em;
  border-top: 1px solid #f2f2f2;
}

.fr-header .fr-nav {
  box-shadow: none;
}

.fr-btn {
  border-radius: 100px;
  background: #3355e3;
}

.fr-card {
  border-radius: 5px;
  box-shadow: 0 2px 0 0 #eee;

  .fr-card__img {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center 30%;
    text-align: center;

    .fr-tag {
      background: #fff;
      font-weight: 600;
    }
  }

  .call-to-action {
    margin-top: auto;
  }
}

.fr-card__title {
  font-size: 1.2em;
}
</style>
