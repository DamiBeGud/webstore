
const imageUrls=['./images/about1.jpg','./images/about2.jpg','./images/about3.jpg']
    
let i = 1
let image = 1

// setInterval(()=>{
//     const upper = document.getElementById('upper-image')
//     if(i != 5){
//         upper.classList.add(`clip-${i}`)
//         i = i + 1
//         // if(i != 1) upper.classList.remove(`clip-${i - 1}`)
//     }else{
//         upper.classList.remove(`clip-4`)
//         upper.classList.remove(`clip-3`)
//         upper.classList.remove(`clip-2`)
//         upper.classList.remove(`clip-1`)
//         upper.src = imageUrls[image]
//         if(image === 2){
//             document.getElementById('down-image').src = imageUrls[0]
//             image = 0

//         }else{
//             document.getElementById('down-image').src = imageUrls[image + 1]
//             image = image + 1

//         }
//         i = 1
//     }
// },2000)


setInterval(()=>{
    document.getElementById('upper-image').src = imageUrls[i]
    if(i === 2){
        document.getElementById('down-image').src = imageUrls[0]
        i = 0
    }else{
        document.getElementById('down-image').src = imageUrls[i + 1]
        i = i + 1
    }


},8000)