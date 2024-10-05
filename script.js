const searchBtn = document.querySelector('.search.button');
const searchTxt = document.querySelector('.search.text');

let isClose = true

searchBtn.addEventListener('click', () => {

    if (isClose) {
        isClose = !isClose
        searchTxt.classList.remove('close')
        searchTxt.classList.add('actvie')
    } else {
        isClose = !isClose
        searchTxt.classList.add('close')
        searchTxt.classList.remove('actvie')
    }

})