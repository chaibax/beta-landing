<template>
  <!-- This is the Events list Page-->
  <Layout>
    <div>
      <div class="content">
        <section class="startups">
          <div class="fr-container">
            <div class="fr-grid-row fr-grid-row--gutters">
              <div class="fr-col">
                <h1>Pour les Startups d'État</h1>
              </div>
            </div>

            <div class="fr-grid-row fr-grid-row--gutters">
              <div class="fr-col-12 fr-col-md-5">
                <img src="images/startups.svg" alt="" />
                <div class="fr-highlight">
                  Nous accompagnons les Startups d'État dans leur recherche
                  utilisateur, l'organisation d'entretiens ou de tests, la
                  réalisation de prototypes ou le recrutement d'un·e designer.
                </div>
              </div>

              <div class="fr-col-12 fr-col-md-7">
                <div class="kpis">
                  <div class="kpi">
                    <h2>
                      <strong>{{ accompaniedStartup }}</strong> équipes
                      accompagnées par les designers transverses
                    </h2>
                    <p>
                      Startups d'État ayant bénéficié d'un atelier ou d'une
                      mission courte.
                    </p>
                  </div>
                  <div class="kpi">
                    <h2>
                      <strong>{{ startupsWithDesignerPercent }}</strong> équipes
                      accompagnées par un·e designer
                    </h2>
                    <p>
                      Startups d'État ayant accueilli un·e designer à temps
                      plein ou ponctuellement.
                    </p>
                  </div>
                  <div class="kpi">
                    <h2>
                      <strong>{{ accompaniedYouth }}</strong> de jeunes pousses
                      accompagnées
                    </h2>
                    <p>
                      Start-ups d'État en phase d'investigation ou de
                      construction suivies par l'équipe transverse.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="designers">
          <div class="fr-container">
            <div class="fr-grid-row">
              <div class="fr-col">
                <h1>Pour les Designers</h1>
              </div>
            </div>

            <div class="fr-grid-row fr-grid-row--gutters">
              <div class="fr-col-12 fr-col-md-5">
                <img src="images/designers.svg" alt="" />
                <div class="fr-highlight">
                  Nous accueillons les designers, leur fournissons des supports
                  de travail et de communication, et diffusons des bonnes
                  pratiques de conception pour leurs services numériques.
                </div>
              </div>

              <div class="fr-col-12 fr-col-md-7">
                <div class="kpis">
                  <div class="kpi">
                    <h2>
                      <strong>{{ designers }}</strong> designers dans la
                      communauté
                    </h2>
                    <p><a
                        href="https://airtable.com/shrKVGcaSzzXxHI93/tblLXKFp5fHLE8PQ6"
                        target="_blank" rel="noopener"
                        title="Tous les designers - nouvelle fenêtre"
                        >Tous les designers
                        </a>
                      ayant intégré une startup d'État ou l'équipe transverse.
                    </p>
                  </div>
                  <div class="kpi">
                    <h2>
                      <strong>{{ welcomedDesigners }}</strong> de designers
                      accueillis
                    </h2>
                    <p>
                      Embarquement des nouveaux designers de la communauté.<br /><a
                        href="https://airtable.com/shrynjHWqvRIfMhZB"
                        target="_blank" rel="noopener"
                        title="Accueil de nouveau designer - nouvelle fenêtre"
                        >On ne t'a pas accueilli ?
                        </a>
                    </p>
                  </div>
                  <div class="kpi">
                    <h2>
                      <strong>{{ rex }}</strong> retours d'expérience
                    </h2>
                    <p>
                      <a href="#"
                      target="_blank" rel="noopener"
                        title="Documents partagés à la communauté - nouvelle fenêtre"
                        >Documents partagés à la communauté
                        </a> de travail, maquettes, restitution d'ateliers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="community">
          <div class="fr-container">
            <div class="fr-grid-row">
              <div class="fr-col">
                <h1>Pour la communauté</h1>
              </div>
            </div>

            <div class="fr-grid-row fr-grid-row--gutters">
              <div class="fr-col-12 fr-col-md-5">
                <img src="images/community.svg" alt="" />
                <div class="fr-highlight">
                  Pour l'ensemble de la communauté, nous proposons des
                  formations, des évènements liés au design et aux bonnes
                  pratiques dans les Startups.
                </div>
              </div>

              <div class="fr-col-12 fr-col-md-7">
                <div class="kpis">
                  <div class="kpi">
                    <h2>
                      <strong></strong> évènements et rendez-vous
                      liés au design
                    </h2>
                    <p>
                      Ateliers, retours d'expériences ou formations organisés
                      par l'équipe.<br />
                      <a href="/events">Voir les évènements à venir</a>
                    </p>
                  </div>
                  <div class="kpi">
                    <h2><strong>45</strong> participations à nos évènements</h2>
                    <p>
                      Membres de la communauté ayant participé ou assisté à nos
                      rendez-vous, designers, ou pas !
                    </p>
                  </div>
                  <div class="kpi">
                    <h2>
                      <strong>4.2<em> / 5</em></strong> satisfaction globale des
                      usagers
                    </h2>
                    <p>
                      Évaluation du « retour sur temps investi » (ROTI), à la
                      fin de nos évènements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <!-- Content -->
    </div>
  </Layout>
</template>



<script>
import Layout from "~/layouts/Default.vue";

export default {
  metaInfo: {
    title: "Statistiques",
  },

  components: {
    Layout,
  },
  computed: {
    // Pour les SE
    accompaniedStartup: function () {
      return this.$page.startups.edges.filter(
          (startup) => startup.node.missions.length > 0
      ).length;
    },
    startupsWithDesignerPercent: function () {
      var total = this.$page.startups.edges.length;
      var startupsWithDesigner = this.$page.startups.edges.filter(
        (designer) => designer.node.designers.length > 0
      ).length;

      return Math.round((startupsWithDesigner / total) * 100) + "%";
    },
    accompaniedYouth: function () {
      // Nombre de jeunes SE
      var totalCount = this.$page.startups.edges.filter(
        (startup) => ["investigation", "construction"].includes(startup.node.phase)
      ).length;

      // Nombre de jeunes SE accompagnes
      var accompaniedCount = this.$page.startups.edges
        .filter((startup) => startup.node.missions.length > 0)
        .filter((startup) =>
          ["investigation", "construction"].includes(startup.node.phase)
        ).length;

      // Percentage
      return Math.round((accompaniedCount / totalCount) * 100) + "%";
    },

    // Pour les designers
    designers: function () {
      return this.$page.designers.edges.length;
    },
    welcomedDesigners: function () {
      var total = this.$page.designers.edges.filter(
        (designer) =>
          ![
            "J'ai quitté beta",
            "Non merci, j'ai déjà bien à faire",
            "Transverse",
          ].includes(designer.node.embarquement)
      ).length;

      var welcomed = this.$page.designers.edges.filter((designer) =>
        ["On s'est déjà rencontrés"].includes(designer.node.embarquement)
      ).length;

      return Math.round((welcomed / total) * 100) + "%";
    },
    rex: function () {
      return this.$page.missions.edges.filter((mission) =>
        ["Terminé"].includes(mission.node.statut)
      ).length;
    },

    // Pour la communauté
    allEvents: function () {
      return this.$page.events.edges.length;
    },

  },
};
</script>




<style>
section {
  padding: 0 0 2em;
  position: relative;
}

section:nth-child(2n) {
  background: #fff;
  margin-bottom: 3em;
}

@media (min-width: 768px) {
  section:nth-child(2n) .fr-grid-row {
    flex-direction: row-reverse;
  }
}

section:nth-child(2n):before {
  content: "";
  position: absolute;
  width: 100%;
  height: 3em;
  background: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0) 49%,
    #fff 50%
  );
  top: -3em;
  left: 0;
}

section:nth-child(2n):after {
  content: "";
  position: absolute;
  width: 100%;
  height: 3em;
  background: linear-gradient(
    to top right,
    rgba(255, 255, 255, 0) 49%,
    #fff 50%
  );
  bottom: -3em;
  left: 0;
}

/* Colors */

section.startups .fr-highlight {
  border-left-color: #008262;
}
section.startups .kpi strong {
  color: #008262;
}

section.designers .fr-highlight {
  border-left-color: #5770be;
}
section.designers .kpi strong {
  color: #5770be;
}

section.community .fr-highlight {
  border-left-color: #f56542;
}
section.community .kpi strong {
  color: #f56542;
}

.kpis {
  display: flex;
  flex-wrap: wrap;
}

.kpis a {
  color: var(--info);
}

.kpi {
  display: flex;
  flex-direction: column;
  margin: 1em;
  max-width: 36%;
  margin-right: 5%;
}
.kpi:last-child {
  max-width: 50%;
}

.kpi h2 {
  font-size: 1rem;
  line-height: 1.4;
  font-weight: bold;
  margin: 0;
}

.kpi h2 strong {
  font-size: 3.5rem;
  font-weight: 600;
  /*color: #000091;*/
  display: block;
  line-height: 1.2;
}

.kpi em {
  font-weight: normal;
  font-size: 1.5rem;
}

.kpi p {
  font-size: 0.9rem;
  font-weight: normal;
}
</style>



