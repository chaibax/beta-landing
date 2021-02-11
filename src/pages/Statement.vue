<template>
  <Layout>
    <div>
        <div class="rf-container">
            <div class="rf-grid-row rf-grid-row--gutters">
                <div class="rf-col">

					<h1>Déclaration d'accessibilité</h1>

					<p><span>beta.gouv.fr</span> s’engage à rendre ses services accessibles, conformément à l’article 47 de la loi n° 2005-102 du 11 février 2005. Cette déclaration d’accessibilité s’applique à <span>Designers Transverses</span>.</p>

					<h2>État de conformité</h2>
					<p>
						<span>Designers Transverses</span> est 
						<b><span data-printfilter="lowercase">non conforme</span> avec le <span data-negate="">RGAA 4.0</span></b> : le site n'a pas encore été audité.</span></span>
					</p>
					<h2>Contenus non accessibles</h2>
					<h3>Non conformité</h3>
					<p>Malgré nos efforts, certains contenus sont inaccessibles. Vous trouverez ci-dessous une liste des limitations connues et des solutions potentielles :</p>
					<ul class="technical-information accessibility-limitations">
						<li><strong>Contenu externes</strong>: Plusieurs liens emmènent vers Airtable ou Google Drive parce que Nous ne pouvons garantir l'accessibilité des supports de formation.. Nous essayons de proposer chaque compte rendu ou support au format texte.. Merci d'utiliser le formulaire de contact si vous rencontrez un problème.</li>
					</ul>
					<h3>Contenus non soumis à l’obligation d’accessibilité</h3>
					<p>L'outil Airtable est un service externe, non soumis à obligation.</p>
					<h2>Établissement de cette déclaration d'accessibilité</h2>
					<p>Cette déclaration a été établie le <b><span>11 février 2021</span></b>.</p>
					<h3>Technologies utilisées</h3>
					<p>L'accessibilité de <span>Designers Transverses</span> s'appuie sur les technologies suivantes :</p>
					<ul class="technical-information technologies-used">
						<li>HTML</li>
						<li>WAI-ARIA</li>
						<li>CSS</li>
						<li>JavaScript</li>
					</ul>
					<h2>Amélioration et contact</h2>
					<p>Si vous n’arrivez pas à accéder à un contenu ou à un service, vous pouvez contacter le responsable de <span>Designers Transverses</span> pour être orienté vers une alternative accessible ou obtenir le contenu sous une autre forme.</p>
					<ul class="basic-information feedback h-card">
						<li>
						E-mail : <a href="mailto:design@beta.gouv.fr">design@beta.gouv.fr</a>
					</li>
					</ul>
					<p>
						Nous essayons de répondre dans la <span>1 semaine</span>.
					</p>
					<h2>Voie de recours</h2>
					<p>Cette procédure est à utiliser dans le cas suivant : vous avez signalé au responsable du site internet un défaut d’accessibilité qui vous empêche d’accéder à un contenu ou à un des services du portail et vous n’avez pas obtenu de réponse satisfaisante.</p>
					<p>Vous pouvez :</p>
					<ul>
						<li>Écrire un message au <a href="https://formulaire.defenseurdesdroits.fr/">Défenseur des droits</a></li>
						<li>Contacter <a href="https://www.defenseurdesdroits.fr/saisir/delegues">le délégué du Défenseur des droits dans votre région</a></li>
						<li>Envoyer un courrier par la poste (gratuit, ne pas mettre de timbre) :<br>
						Défenseur des droits<br>
						Libre réponse 71120 75342 Paris CEDEX 07</li>
					</ul>
					<hr>
					<p>
						Cette déclaration d'accessibilité a été créé le <span>11 février 2021</span> grâce au <a href="https://betagouv.github.io/a11y-generateur-declaration/#create">Générateur de Déclaration d'Accessibilité de BetaGouv</a>.
					</p>

				</div>
			</div>
		</div>
	</div>
  </Layout>
</template>

<script>
import Layout from "~/layouts/Default.vue";

export default {
    metaInfo: {
        title: "Déclaration d'accessibilité",
    },

    components: {
        Layout,
    },
}
</script>
