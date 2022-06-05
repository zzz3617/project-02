let div = document.querySelector('div')
let btn = document.querySelector('button')
let flag = true

btn.addEventListener('click', function () {
    if (flag = !flag) {
        div.style.backgroundColor = 'skyblue'
    } else {
        div.style.backgroundColor = 'hotpink'
    }
})