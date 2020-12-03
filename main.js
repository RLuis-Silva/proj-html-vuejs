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
            {nome: "twitter", url: "twitter", link: "https://twitter.com/login?lang=it"},
            {nome: "pinterest", url:"pinterest-p", link:"https://www.pinterest.it"},
            {nome:"facebook", url:"facebook-f", link: "https://it-it.facebook.com/"},
            {nome: "linkedin", url:"linkedin-in", link:"https://it.linkedin.com/"}
        ]

    }
});