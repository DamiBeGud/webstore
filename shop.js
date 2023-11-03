// clear filters

// const clearFiltersButton = document.getElementById('clear-filter')
// const checkBoxes = document.getElementsByClassName('checkbox')


// clearFiltersButton.addEventListener('click', (e)=>{
//     e.preventDefault()
//     for(let i = 0; i<= 4;i++){
//         checkBoxes[i].checked = false
//     }

// })


const closeCategores = document.getElementById('close')
const openCategores = document.getElementById('open')

closeCategores.addEventListener('click',()=>{
    document.getElementById('categories').classList.add('conteiner-card-categories-close')
    document.getElementById('categories').classList.remove('conteiner-card-categories-open')
    document.getElementById('categories-wrapper').classList.add('hidden')
    document.getElementById('categories-text').classList.remove('hidden')
    openCategores.classList.remove('hidden')
    closeCategores.classList.add('hidden')

})


openCategores.addEventListener('click',()=>{
    document.getElementById('categories').classList.add('conteiner-card-categories-open')
    document.getElementById('categories').classList.remove('conteiner-card-categories-close')
    document.getElementById('categories-wrapper').classList.remove('hidden')
    document.getElementById('categories-text').classList.add('hidden')
    openCategores.classList.add('hidden')
    closeCategores.classList.remove('hidden')
})