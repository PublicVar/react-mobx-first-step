# REACT avec MobX

## Objectif 

Un exemple de projet REACT avec MobX et une interaction API. L'installation de base a été réalisé avec create-react-app.
L'idée est de créer des interfaces pour pouvoir intéragir avec l'API simplement.

# Installation Mobx

Comme MobX utilise des *decorators* et que c'est une feature expériemental, il faut modifier la config de babel. 
De base, c'est pas possible c'est pourquoi il faut faire un run ```npm run eject``` pour avoir les fichiers config webpack de create-react-app. Après, on peut ajouter le support des *decorators*

```
npm run eject
npm install --save-dev babel-plugin-transform-decorators-legacy
```

**Important:
Le fait de faire ```npm run eject``` rend le CLI, create-react-app, pour ce projet inutilisable. Il faudra modifier soit même les scripts et les configs par la suite.**

Modifier le fichier *package.json* configuration pour accepter les *decorators* :

```
"babel": {
        "plugins": [
            "transform-decorators-legacy"
        ],
        "presets": [
            "react-app"
        ]
    },
```

Installer Mobx : 

```
npm install --save mobx mobx-react
```

**Si jamais on a des problèmes avec le module babel-loader qui ne serait introuvable faire un ```npm install```**

# A faire

Tout n'est pas encore fonctionnel. Il reste à :

* mettre l'API à jour quand on ajoute un utilisateur
* modifier l'interface pour pouvoir supprimer un utilisateur et mettre l'API à jour
* modifier l'interface pour pouvoir éditer un utilisateur et mettre l'API à jour

Et bien plus encore.
