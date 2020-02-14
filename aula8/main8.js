
const button = document.querySelectorAll('button');

button.forEach(element => {

    element.addEventListener('click', function(e){

        // remove todas as classes active//
        button.forEach(el => {
            el.classList.remove('active');
        })

        const color = e.target.getAttribute('data-color');

        e.target.classList.add('active');

        const image = document.querySelector('.image');

        image.style.backgroundImage = `url(car-${color}.jpg)`;



    })

});