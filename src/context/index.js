import {createStore} from 'vuex'
import es from "../languages/es.json";
import en from "../languages/en.json";

const languages = {
    es,
    en
};


export default createStore({
    state: {
        language: en,// valor por defecto hector esta llorando
    },

    mutations: {
        changeColor: function(state, color){
            state.color = color;
        },

        changeLanguage: (state, language)=>{
            state.language = language;
        } 
    },

    actions: {
        changeColor: function(context, key){
            const color = colors[key];
            context.commit("changeColor", color);
        },

        changeLanguage: function (context, key) {
            const language = languages[key];
            context.commit('changeLanguage', language)
        }
    }

});