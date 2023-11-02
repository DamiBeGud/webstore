// clear filters

const clearFiltersButton = document.getElementById('clear-filter')
const checkBoxes = document.getElementsByClassName('checkbox')


clearFiltersButton.addEventListener('click', (e)=>{
    e.preventDefault()
    for(let i = 0; i<= 4;i++){
        checkBoxes[i].checked = false
    }

})

