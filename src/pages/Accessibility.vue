<template>
  <Layout>
    <div>
        <div class="rf-container">
            <div class="rf-grid-row rf-grid-row--gutters">
                <div class="rf-col">

					<h1>Accessibilité</h1>

				  	<h2>Démarche d'accessibilité</h2>

					<p>
						Le site <a href="/">Designers Transverses</a> est 
						<b>non conforme avec le RGAA 4.0</b> : le site n'a pas encore été audité.
					</p>

				  	<p>Nous souhaitons cependant qu'il soit accessible au plus grand nombre. Vous devriez donc pouvoir :</p>
				  	<ul>
				  		<li>changer les couleurs, les niveaux de contraste et les polices de caractères,</li>
				  		<li>zoomer jusqu'à 300% sans que le texte ne déborde de l'écran,</li>
				  		<li>naviguer sur la plupart des pages du site en utilisant un simple clavier</li>
				  		<li>écouter la plus grande partie du site web à l'aide d'un lecteur d'écran.</li>
				  	</ul>

				  	<p>Nous avons également rendu le texte du site aussi simple que possible à comprendre.</p>

				  	<h2>Défauts d'accessibilité</h2>

				  	<p>Nous savons que certaines parties de ce site ne sont pas entièrement accessibles :</p>

				  	<ul>
				  		<li>Beaucoup de liens externes mènent à Airtable.</li>
				  		<li>Certains documents sont hébergés sur Google Drive. Nous ne garantissons par leur accessibilité, mais essayons de fournir un support texte à toutes nos formations et interventions.</li>
				  	</ul>

				  	<p><a class="rf-btn rf-btn--sm" href="/statement">Lire la déclaration d'accessibilité</a></p>
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
        title: "Accessibilité",
    },

    components: {
        Layout,
    },
}
</script>
