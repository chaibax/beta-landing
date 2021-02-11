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
                                    Nous accompagnons les Startups d'État dans leur recherche utilisateur, l'organisation d'entretiens ou de tests, la réalisation de prototypes ou le recrutement d'un·e designer.
                                </div>
                            </div>

                            <div class=" rf-col-12 rf-col-md-7">
                                <div class="kpis">
                                    <div class="kpi">
                                        <h2><strong>{{accompaniedStartup}}</strong> équipes accompagnées par les designers transverses</h2>
                                        <p>Startups d'État ayant bénéficié d'un atelier ou d'une mission courte.</p>
                                    </div>
                                    <div class="kpi">
                                        <h2><strong>{{startupsWithDesignerPercent}}</strong> équipes accompagnées par un·e designer</h2>
                                        <p>Startups d'État ayant accueilli un·e designer à temps plein ou ponctuellement.</p>
                                    </div>
                                    <div class="kpi">
                                        <h2><strong>{{accompaniedYouth}}</strong> de jeunes pousses accompagnées</h2>
                                        <p>Start-ups d'État en phase d'investigation ou de construction suivies par l'équipe transverse.</p>
                                    </div>
                                </div>

                            </div>
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
                                    et diffusons des bonnes pratiques de conception pour leurs services numériques.
                                </div>
                            </div>

                            <div class="rf-col-12 rf-col-md-7">
                                <div class="kpis">
                                    <div class="kpi">
                                        <h2><strong>{{designers}}</strong> designers dans la communauté</h2>
                                        <p><a href="https://airtable.com/shrKVGcaSzzXxHI93/tblLXKFp5fHLE8PQ6" target="_blank">Tous les designers <span class="rf-fi-external-link-line"></span></a> ayant intégré une startup d'État ou l'équipe transverse.</p>
                                    </div>
                                    <div class="kpi">
                                        <h2><strong>{{welcomedDesigners}}</strong> de designers accueillis</h2>
                                        <p>Embarquement des nouveaux designers de la communauté <a href="https://airtable.com/shrynjHWqvRIfMhZB" target="_blank">On n'a pas encore discuté ? <span class="rf-fi-external-link-line"></span></a>.</p>
                                    </div>
                                    <div class="kpi">
                                        <h2><strong>{{missions}}</strong> retours d'expérience</h2>
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
                                       <h2><strong>{{allEvents}}</strong> évènements et rendez-vous liés au design</h2>
                                        <p>Dans le cadre d'un atelier ou d'une mission <br><a href="/events">Les évènements à venir</a></p>

                                    </div>
                                    <div class="kpi">
                                        <h2><strong>45</strong> participations à nos évènements</h2>
                                        <p>De l'ensemble de la communauté</p>
                                    </div>
                                    <div class="kpi">
                                        <h2><strong>4.2<em> / 5</em></strong> satisfaction globale des usagers</h2>
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

    startups: allStartup {
        edges {
            node {
                nom
                statut
                designers
                phase
            }
        }
    }

    designers: allDesigner {
        edges {
            node {
                id
                embarquement
            }
        }
    }

    missions: allMission {
        edges {
            node {
                id
                statut
            }
        }
    }


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

        accompaniedStartup: function () {
            return this.$page.startups.edges
                .filter(event => ["Accompagné", "En cours"].includes(event.node.statut) )
                .length
        },

        startupsWithDesignerPercent: function () {
            var total = this.$page.startups.edges.length
            var startupsWithDesigner = this.$page.startups.edges
                .filter(designer =>  designer.node.designers.length > 0 )
                .length

            return Math.round(startupsWithDesigner / total * 100) + "%"
        },

        accompaniedYouth: function () {
            var total = this.$page.startups.edges.length

            var startupsWithDesigner = this.$page.startups.edges
                .filter(designer => ["Accompagné", "En cours"].includes(designer.node.statut) )
                .filter(designer => ["investigation", "construction"].includes(designer.node.phase) )
                .length

            return Math.round(startupsWithDesigner / total * 100) + "%"
        },

        designers: function () {
            return this.$page.designers.edges.length;
        },

        welcomedDesigners: function () {
            var total = this.$page.designers.edges
                .filter(designer => ! ["J'ai quitté beta", "Non merci, j'ai déjà bien à faire", "Transverse"].includes(designer.node.embarquement))
                .length

            var welcomed = this.$page.designers.edges
                .filter(designer => ["On s'est déjà rencontrés"].includes(designer.node.embarquement))
                .length

            return Math.round(welcomed / total * 100) + "%"
        },


        missions: function () {
            return this.$page.missions.edges
                .filter(mission => ["Terminé"].includes(mission.node.statut) )
                .length;
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
    font-size: .9rem;
    font-weight: normal;
}


</style>



