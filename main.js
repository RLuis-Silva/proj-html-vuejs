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

        contattiPersonale: {
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
            {nome: "twitter", url: "twitter"},
            {nome: "pinterest", url:"pinterest-p"},
            {nome:"facebook", url:"facebook-f"},
            {nome: "linkedin", url:"linkedin-in"}
        ]

    }
});