# Site de présentation des designers transverses


## Installer le site en local

Installer tout d'abord les outils gridsome
`npm install --global @gridsome/cli`


````
git clone git@github.com:betagouv/designers-transverses.git
yarn
gridsome develop
````

Le site est accessible à l'adresse : `http://localhost:8080`

## Aide au développement

* Pour explorer les données accessibles : 
````
http://localhost:8080/___explore
````
L'onglet Docs montre le schéma accessible.


* Pour voir des exemples du DSFR :
````
cd node_modules/@gouvfr/dsfr && npx http-server -o
````
