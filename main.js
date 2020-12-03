// console.log("prova prova, sa sa");

const web = new Vue({
    el: "#web",
    data: {
        navBarSezioni: [
            {nome: "LUL"},     //Home
            {nome: "Pages"},
            {nome: "Portfolio"},
            {nome: "Blog"},
            {nome: "Shop"},
        ],
        navBarIcone:[
            {nome: "menuHumburger", path:"th"}
        ],

        contattoPersonale: {
            email: "maree.qode@gmail.com",
            tel: "+44645321789"
        },

        indirizzo: {
            via: "Avenue d'Auderghem 10",
            citta: "1040 Brussels, Belgium"
        },

        linkSocial:{
            frase:"Stay in touch with us"
        },

        ArraySocial: [
            {nome: "twitter", url: "fab fa-twitter"},
            {nome: "pinterest", url:"fab fa-facebook-f"},
            {nome:"facebook", url:"fab fa-facebook-f"},
            {nome: "linkedin", url:"fab fa-linkedin-in"}
        ]

    }
});