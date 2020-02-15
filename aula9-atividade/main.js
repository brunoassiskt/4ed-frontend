document.querySelector('form');

const form = document.querySelector('form');

form.addEventListener('submit', function (e){

    e.preventDefault();

    const ano = document.querySelector('#ano');
    const videoId = 'KjkMuvFlVWE';
    const video = document.querySelector('.video');


    if( (2020 - ano.value) >= 18){
        document.querySelector('.popup').style.display = 'none';
        video.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
        


})




