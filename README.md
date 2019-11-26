# Apptest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

--------------------------------------------------------------------------------------------------------------------------------------------------------

 26.11.19

Hello cher(e) collègue dev! 
Je suis ta prédecesseure Cellia =) 

J'écris ces quelques lignes ici pour expliquer un peu mon raisonnement par rapport aux fichiers qui se trouvent dans ce dossier.

Ceci est la partie front que j'ai faite avec Angular/ ionic.
Si tu as vu angular en cours, tu connais donc l'architecture de base propre au langage. 

L'appli a 3 catégories : Actus/news, Aidants et Patients qui correspondent au 3 volets de l'application finale.

j'ai fait 3 dossiers (ebref, liens et patients). 
Dans Ebref il y a tout ce qui concerne la page avec la grille des articles. les visuels de page sont les fichiers html.
Dans "liens" il y a les fonctions autres du type glossaire, la cart de géolocalisation etc.
Dans "patients' il y a le code correspondant à la grille des articles pour la catégorie patients, et dans "patients-single" se trouve le visuel d'un article en particulier. 
C'est presque le même modèle que la version symfony adaptée à l'arborescence ionic. 
Je n'ai pas créé les sous-dossiers aidants et actus car j'ai préféré commencer par développer une catégorie  à la fois pour pouvoir ensuite la dupliquer pour les autres catégories une fois que tout fonctionne correctement.

Dans le fichier "app.component.html" se trouve l'aperçu de la première page sur laquelle arrive l'utilisateur lorsque l'appli a fini de charger.
Tous les fichiers contenus à la racine de "app" ont un effet global dans l'application.
Toutes les infos sur ionic + angular est là : 
https://ionicframework.com/docs/building/starting
https://angular.io/start

Pour développer j'ai principalement utilisé le terminal (ctrl + shift + ù) et tu as aussi la console directement sur chrome en faisant un clic droit ("inspecter le code").