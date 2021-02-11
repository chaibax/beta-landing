<template>
    <!-- This is the Events list Page-->
    <Layout>
        <div>

            <div class="content">
                <section class="startups">
                    <div class="rf-container">

                        <div class="rf-grid-row rf-grid-row--gutters">
                            <div class="rf-col">
                                <h1>Pour les Startups d'État</h1>
                            </div>
                        </div>

                        <div class="rf-grid-row rf-grid-row--gutters">

                            <div class=" rf-col-12 rf-col-md-5">
                                <img src="images/startups.svg" alt="" />
                                <div class="rf-highlight">
                                    Nous accompagnons les Startups d'Etat dans leur recherche utilisateur, l'organisation d'entretiens ou de tests, la réalisation de prototypes ou le recrutement d'un designer.
                                </div>
                            </div>

                            <div class=" rf-col-12 rf-col-md-7">
                                <div class="kpis">
                                    <div class="kpi">
                                        <strong>35</strong>
                                        <h2>Startups accompagnées par l'équipe transverse</h2>
                                        <p>Dans le cadre d'un atelier ou d'une mission</p>
                                    </div>
                                    <div class="kpi">
                                        <strong>59%</strong>
                                        <h2>Startups accompagnées par un designer</h2>
                                        <p>Depuis leur création jusqu'à aujourd'hui</p>
                                    </div>
                                    <div class="kpi">
                                          <strong>45%</strong>
                                        <h2>De jeunes pousses accompagnées</h2>
                                        <p>Start-ups en phase d'investigation ou de construction</p>
                                    </div>
                                </div>

                            </div>

                            <!--
                            <div class="rf-col-5">
                                <canvas id="myChart" height="100"></canvas>
                            </div>
                        -->
                        </div>
                    </div>
                </section>


                <section class="designers">
                    <div class="rf-container">

                        <div class="rf-grid-row">
                            <div class="rf-col">
                                <h1>Pour les Designers</h1>
                            </div>
                        </div>

                        <div class="rf-grid-row rf-grid-row--gutters">

                            <div class="rf-col-12 rf-col-md-5">
                                <img src="images/designers.svg" alt="" />
                                <div class="rf-highlight">
                                    Nous accueillons les designers, leur fournissons des supports de travail et de communication,
                                    et diffusons des bonnes pratiques de conception pour les produits.
                                </div>
                            </div>

                            <div class="rf-col-12 rf-col-md-7">
                                <div class="kpis">
                                    <div class="kpi">
                                        <strong>26</strong>
                                        <h2>Designers dans la communauté</h2>
                                        <p>Dans l'équipe transverse ou dans une SE</p>
                                    </div>
                                    <div class="kpi">
                                        <strong>35%</strong>
                                        <h2>De designers engagés</h2>
                                        <p>Présents à notre dernier séminaire</p>
                                    </div>
                                    <div class="kpi">
                                        <strong>121</strong>
                                        <h2>Retours d'expérience partagés à la communauté</h2>
                                        <p>Documents de travail, maquettes, retours <br> <a href="#">Voir les documents</a></p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>


                <section class="community">
                    <div class="rf-container">

                        <div class="rf-grid-row">
                            <div class="rf-col">
                                <h1>Pour la communauté</h1>
                            </div>
                        </div>

                        <div class="rf-grid-row rf-grid-row--gutters">

                            <div class="rf-col-12 rf-col-md-5">
                                <img src="images/community.svg" alt="" />
                                <div class="rf-highlight">
                                    Pour l'ensemble de la communauté, nous proposons des formations, des évènements liés au design
                                    et aux bonnes pratiques dans les Startups.
                                </div>
                            </div>

                            <div class="rf-col-12 rf-col-md-7">
                                <div class="kpis">
                                    <div class="kpi">
                                        <strong>{{allEvents}}</strong>
                                       <h2>Évènements et rendez-vous liés au design</h2>
                                        <p>Dans le cadre d'un atelier ou d'une mission <br><a href="#">Les évènements à venir</a></p>

                                    </div>
                                    <div class="kpi">
                                        <strong>87</strong>
                                        <h2>Participations à nos évènements</h2>
                                        <p>De l'ensemble de la communauté</p>
                                    </div>
                                    <div class="kpi">
                                        <strong>4.2<em> / 5</em></strong>
                                        <h2>Satisfaction globale des usagers</h2>
                                        <p>Lors de nos évènements</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </div><!-- Content -->

        </div>
  </Layout>
</template>

<page-query>
query {
    events: allEvent {
        edges {
            node {
                id
            }
        }
    }
}
</page-query>



<script>
import Layout from "~/layouts/Default.vue";


export default {
    metaInfo: {
        title: 'Statistiques',
    },

    components: {
        Layout,
    },
    computed: {
        allEvents: function () {
            return  this.$page.events.edges.length;
        },
    }
};
</script>




<style>

section {
    padding: 0 0 2em;
    position: relative;
}

section:nth-child(2n) {
    background: #FFF;
    margin-bottom: 3em;
}

@media(min-width: 768px) {
    section:nth-child(2n) .rf-grid-row {
        flex-direction: row-reverse;
    }
}

section:nth-child(2n):before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3em;
    background: linear-gradient(to bottom right, rgba(255,255,255,0) 49%, #FFF 50%);
    top: -3em;
    left: 0;
}

section:nth-child(2n):after {
    content: "";
    position: absolute;
    width: 100%;
    height: 3em;
    background: linear-gradient(to top right, rgba(255,255,255,0) 49%, #FFF 50%);
    bottom: -3em;
    left: 0;
}



/* Colors */

section.startups .rf-highlight {
    border-left-color: #008262;;
}
section.startups .kpi strong {
    color: #008262;
}

section.designers .rf-highlight {
    border-left-color: #5770BE;;
}
section.designers .kpi strong {
    color: #5770BE;
}

section.community .rf-highlight {
    border-left-color: #f56542;
}
section.community .kpi strong {
    color: #f56542;
}




.kpis {
    display : flex;
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

.kpi h3 {
    font-size: 1rem;
    line-height: 1.4;
    font-weight: bold;
    margin: 0;
}

.kpi strong {
    font-size: 3.5rem;
    font-weight: 600;
    /*color: #000091;*/

    line-height: 1.2;
}

.kpi em {
    font-weight: normal;
    font-size: 1.5rem;
}

.kpi p {
    font-size: .9rem;
    font-weight: normal;
}


</style>



