const items = document.querySelectorAll('.item')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const progress = document.querySelector('.progress')


prev.addEventListener('click', prevProgress)
next.addEventListener('click', nextProgress)

let index = 0;
let percentage = 0;

function nextProgress() {
    if (index < items.length - 1) {
        index++
        // if (index > items.length - 1) {
        //     index = 0;
        //     percentage = 0;
        //     items.forEach(item => {
        //         item.classList.remove('item_progress')
        //     })
        //     progress.style = `width:${percentage};`
        //     return
        // }
        items[index].classList.add('item_progress')
        percentage += 30;
        progress.style = `width:${percentage}%;`
    }
    btnColorChanger()
    return;
}



function prevProgress() {
    // if (index === 0) {
    //     index = items.length - 1;
    //     items.forEach(item => {
    //         item.classList.add('item_progress')
    //     })
    //     percentage = 90;
    //     progress.style = `width: ${percentage}%;`
    //     return
    // }
    if (index > 0) {
        items[index].classList.remove('item_progress')
        percentage -= 30;
        progress.style = `width: ${percentage}%;`
        index--
    }
    btnColorChanger()
    return
}



function btnColorChanger() {
    if (index === items.length - 1) {
        next.style = `background-color:#a2c5c2;`
        return
    }
    if (index === 0) {
        prev.style = `background-color:#a2c5c2;`
        return
    }
    next.style = `background-color: rgb(0, 153, 255)`
    prev.style = `background-color: rgb(0, 153, 255)`
    return
}