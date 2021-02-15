<template>

    <div class="layout">

      <!-- TODO : problème de focus -->
      <div class="rf-skiplinks">
        <div class="rf-container">
          <ul class="rf-skiplinks__list">
            <li>
              <a class="rf-link" href="#content">Accéder au contenu</a>
            </li>
            <li>
              <a class="rf-link" href="#header-navigation">Accéder au menu</a>
            </li>
            <li>
              <a class="rf-link" href="#footer">Accéder au pied de page</a>
            </li>
          </ul>
        </div>
      </div>


      <Header :service_name="$static.metadata.siteName" />

        <div id="content">
          <slot/>
        </div>

    <footer class="rf-footer" role="contentinfo" id="footer">
        <div class="rf-container">
            <div class="rf-footer__body">
                <div class="rf-footer__brand">
                    <span class="rf-logo">
                        <span class="rf-logo__title">république
                            <br>française</span>
                    </span>
                </div>
                <div class="rf-footer__content">
                    <p class="rf-footer__content-desc">Les Designers Transverses sont des membres de la communauté <a href="https://beta.gouv.fr/">beta.gouv.fr</a>. <br>Le <a href="https://github.com/betagouv/designers-transverses">code source</a> est disponible en licence libre. Illustrations de <a href="https://storyset.com/people"> Freepik Storyset</a>.</p>
                    <ul class="rf-footer__content-list">
                        <li>
                            <a class="rf-footer__content-link" href="https://beta.gouv.fr">beta.gouv.fr</a>
                        </li>
                        <li >
                            <a class="rf-footer__content-link" href="https://doc.incubateur.net/design/">Documentation Design</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="rf-footer__bottom">
                <ul class="rf-footer__bottom-list">
                    <li class="rf-footer__bottom-item">
                        <a class="rf-footer__bottom-link" href="/accessibility">Accessibilité non conforme</a>
                    </li>
                </ul>
                <div class="rf-footer__bottom-copy">
                    © République Française 2021
                </div>
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

    mounted () {
        //require('@gouvfr/all/dist/js/all.min.js');

        let src = "/js/header.min.js"
        let dsfr = document.createElement('script');
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
        background: #FCFCFC;
    }

    h1 {
        font-size: 2.2em;
    }

    .rf-service__title {
        font-weight: 700;
        font-size: 1.4rem;
    }

    .rf-header {
        box-shadow: none;
        border-bottom: 1px solid #F2F2F2;
    }

    .rf-footer {
        margin-top: 5em;
        border-top: 1px solid #F2F2F2;
    }

    .rf-header .rf-nav {
        box-shadow: none;
    }

    .rf-btn {
        border-radius: 100px;
        background: #3355e3;

    }

    .rf-card {
        border-radius: 5px;
        box-shadow: 0 2px 0 0 #EEE;

        .rf-card__img {
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            text-align:center;

            .rf-tag {
                background: #FFF;
                font-weight: 600;
            }
        }


        .call-to-action {
           margin-top: auto;
        }

    }

    .rf-card__title {
        font-size: 1.2em;
    }


</style>
