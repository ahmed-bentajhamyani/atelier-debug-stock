# MiniStock — Mission débogage

Durée : 45 minutes · Travail individuel, puis échange en binôme.
Prérequis : tableaux d’objets, fonctions, conditions, DOM et événements.

## Contexte
La salle de formation dispose d’une petite application de gestion du matériel.
Une première version a été livrée, mais elle contient **5 bugs JavaScript volontaires**.
Votre mission : les reproduire, comprendre leurs causes et les corriger sans réécrire toute l’application.

## Démarrer
Extraire tous les fichiers, puis ouvrir index.html dans le navigateur. Aucun serveur, installation ou accès Internet nécessaire.
Ouvrir les outils de développement (F12), puis la console. Lire le HTML et le JavaScript.
L’absence de sauvegarde après rechargement est normale. Les doublons sont autorisés.
Le formulaire utilise novalidate : la validation doit être assurée par JavaScript.

## Comportement attendu et vérifications
1. Au chargement : Clavier (5), Souris (8), Écran (3). Total : 16.
2. En tapant « sou », seule Souris apparaît immédiatement, sans quitter le champ ni appuyer sur Entrée. « SOUR » fonctionne aussi. Le total reste celui du stock entier : 16.
3. Une recherche « xyz » affiche « Aucun matériel trouvé ». Effacer la recherche réaffiche tout.
4. Ajouter « Casque », quantité 2 : la nouvelle ligne apparaît immédiatement et le total devient 18. Les champs sont réinitialisés et la recherche est effacée.
5. Ajouter ensuite « Câble », quantité 3 : le total devient 21.
6. Un nom vide ou composé uniquement d’espaces avec une quantité 2 est refusé. Aucun élément ne doit être ajouté.
7. Une quantité vide, nulle, négative ou décimale est refusée, même avec un nom valide. Le stock reste inchangé.

## Méthode
- Reproduire le problème et noter le résultat attendu et obtenu.
- Lire les erreurs de la console. Vérifier les valeurs et leurs types si nécessaire.
- Formuler une hypothèse, modifier une seule chose, puis retester.
- Après chaque correction, vérifier les fonctionnalités déjà réparées.
Un bug peut en masquer un autre : poursuivre les tests après chaque réparation.

## Organisation
- 5 min : lecture et première exécution.
- 25 min : recherche et correction.
- 10 min : tests et comparaison des démarches en binôme.
- 5 min : bilan individuel.

## Livrables
Le projet corrigé et le journal de débogage complété. Pour le bilan, expliquer un bug, sa cause, sa correction et le test qui prouve sa résolution.
Conserver le HTML et le CSS ; les 5 corrections attendues concernent app.js.
