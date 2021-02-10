<template>
    <!-- This is the Events list Page-->
    <Layout>
        <div>

            <div class="content">
                <section class="startups">
                    <div class="rf-container">

                        <div class="rf-grid-row rf-grid-row--gutters">
                            <div class="rf-col">
                                <h2>Pour les Startups d'État</h2>
                            </div>
                        </div>

                        <div class="rf-grid-row rf-grid-row--gutters">

                            <div class=" rf-col-12 rf-col-md-5">
                                <img src="images/startups.svg" alt="Illustration d'une équipe au travail" />
                                <div class="rf-highlight">
                                    Nous accompagnons les Startups d'État dans leur recherche utilisateur, l'organisation d'entretiens ou de tests, la réalisation de prototypes ou le recrutement d'un·e designer.
                                </div>
                            </div>

                            <div class=" rf-col-12 rf-col-md-7">
                                <div class="kpis">
                                    <div class="kpi">
                                        <strong>35</strong>
                                        <h3>équipes accompagnées par les designers transverses</h3>
                                        <p>Startups d'État ayant bénéficié d'un atelier ou d'une mission courte.</p>
                                    </div>
                                    <div class="kpi">
                                        <strong>59%</strong>
                                        <h3>équipes accompagnées par un·e designer</h3>
                                        <p>Startups d'État ayant accueilli un·e designer à temps plein ou ponctuellement.</p>
                                    </div>
                                    <div class="kpi">
                                          <strong>45%</strong>
                                        <h3>de jeunes pousses accompagnées</h3>
                                        <p>Start-ups d'État en phase d'investigation ou de construction suivies par l'équipe transverse.</p>
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
                                <h2>Pour les Designers</h2>
                            </div>
                        </div>

                        <div class="rf-grid-row rf-grid-row--gutters">

                            <div class="rf-col-12 rf-col-md-5">
                                <img src="images/designers.svg" alt="Illustration d'un designer" />
                                <div class="rf-highlight">
                                    Nous accueillons les designers, leur fournissons des supports de travail et de communication,
                                    et diffusons des bonnes pratiques de conception pour leurs services numériques.
                                </div>
                            </div>

                            <div class="rf-col-12 rf-col-md-7">
                                <div class="kpis">
                                    <div class="kpi">
                                        <strong>26</strong>
                                        <h3>designers dans la communauté</h3>
                                        <p>Designers ayant intégré une startup d'État ou l'équipe transverse.</p>
                                    </div>
                                    <div class="kpi">
                                        <strong>35%</strong>
                                        <h3>de designers engagés</h3>
                                        <!-- TODO : lien vers les prochains séminaires -->
                                        <p>Taux de présence lors du dernier <a href="#">Séminaire Designer <span class="rf-fi-external-link-line"></span></a>.</p>
                                    </div>
                                    <div class="kpi">
                                        <strong>121</strong>
                                        <h3>retours d'expérience</h3>
                                        <p>Documents de travail, maquettes, restitution d'ateliers <a href="#">partagés à la communauté <span class="rf-fi-external-link-line"></span></a>.</p>

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
                                <h2>Pour la communauté</h2>
                            </div>
                        </div>

                        <div class="rf-grid-row rf-grid-row--gutters">

                            <div class="rf-col-12 rf-col-md-5">
                                <img src="images/community.svg" alt="Illustration de plusieurs personnes au travail" />
                                <div class="rf-highlight">
                                    Pour l'ensemble de la communauté, nous proposons des formations, des évènements liés au design
                                    et aux bonnes pratiques dans les Startups.
                                </div>
                            </div>

                            <div class="rf-col-12 rf-col-md-7">
                                <div class="kpis">
                                    <div class="kpi">
                                        <strong>{{allEvents}}</strong>
                                       <h3>Évènements et rendez-vous liés au design</h3>
                                        <p>Dans le cadre d'un atelier ou d'une mission <br><a href="#">Les évènements à venir</a></p>

                                    </div>
                                    <div class="kpi">
                                        <strong>87</strong>
                                        <h3>Participations à nos évènements</h3>
                                        <p>De l'ensemble de la communauté</p>
                                    </div>
                                    <div class="kpi">
                                        <strong>4.2<em> / 5</em></strong>
                                        <h3>Satisfaction globale des usagers</h3>
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
    border-left-color: #00AC8C;;
}
section.startups .kpi strong {
    color: #00AC8C;
}

section.designers .rf-highlight {
    border-left-color: #5770BE;;
}
section.designers .kpi strong {
    color: #5770BE;
}

section.community .rf-highlight {
    border-left-color: #FF6F4C;;
}
section.community .kpi strong {
    color: #FF6F4C;
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
.kpi:last-child {
  max-width: 50%;
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



