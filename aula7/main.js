const select = document.getElementById('data-de-nascimento');
let options = "";

for (let index = 1920; index < 2021; index++) {
    console.log(index);    

    options += `<option value="${index}">${index}</option>`;
}

select.innerHTML = options