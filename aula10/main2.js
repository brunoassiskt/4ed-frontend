$('.texto').click(function(){
console.log('.texto');
})

$('button').click(function(){
console.log("clicado");
})

$('h1');
console.log( $('h1') );

$('a').click(function(e){
    e.preventDefault();
    console.log( $(e.target).attr('data-color') );
})

// Para requisitar informações toda vez que entrar no meu Instagram automaticamente sem precisar fazer código
$.ajax({
    method: "get",
    url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=43594947.1677ed0.d89d87eb3b0d4d2fb41972b5d167ce2f",
    success: function(response) {

        console.log(response.data[0].images.standard_resolution.url);

        const posts = response.data;
        const galeria = $('.galeria');

        posts.forEach(element => {

            console.log(element);
            galeria.append(`<a href="${element.link}" target="_blank"> <img src="${element.images.standard_resolution.url}"> <p><i class="material-icons">favorite</i>${element.likes.count}<p/></a>`);
            
        });

    }
})


