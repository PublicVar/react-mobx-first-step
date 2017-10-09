import {observable, action, computed} from "mobx";

/**
 * Objet qui va intéragir directement avec la data (modifier, ajouter, supprimer, lire)
 */
class Store{
    //Rend la propriété users observables. De cette façon ,
    //à chaque changement de valeur, les observer (observateurs) se mettront à jour
    @observable users = [
                    {
                    _id:1,
                    age: 18,
                    name: "yo",
                    type: "Meuh"
                },
                {
                    _id:2,
                    age: 45,
                    name: "Bruno",
                    type: "Sagesse"
                },
                {
                    _id:3,
                    age: 32,
                    name: "Charlotte",
                    type: "Intelligente"
                }
            ];

    constructor(){     
        this.baseUrl = "https://kickass-sdw-3a.herokuapp.com/api/";
    }

    //le decorator action est utilisée sur les actions qui intéragissent avec un observable et qui ont
    //des effets secondaires (appels API, fonctions random, etc.)
    @action
    listUsers(){
        fetch(this.baseUrl + 'users', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then( (response) => {
            return response.json()
          })
          .then(
              (users) => {
                this.users = users;    
              }
          )
    }

    //Todo : Modifier cette action pour poster le user directement sur l'API
    @action addUser(user){  
        this.users.push(user);
    }

    //Todo: Modifier cette action pour supprmier un user directement sur l'API
    @action deleteUser(id){
    }
}

const store = new Store();
export default store;