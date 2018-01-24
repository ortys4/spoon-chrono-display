spoon-time-report
=================

Cette application permet d'afficher les temps au tour des pilotes

Elle est organisée en client / serveur

Back :
------
Fonctionne sous node.js
Lit toutes les secondes la table timer et envoi par socket les derniers temps

Front :
-------
A l'initialisation, elle récupère tous les temps. Puis elle reçoit et ajoute les derniers temps.

Prérequis :
-----------
- Nodejs

Installation :
--------------
- cloner le repository
- lancer le serveur : ``` node serveur.js```
- accéder à l'URL : localhost:8080


