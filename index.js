let div = document.querySelector('div')
let btn = document.querySelector('button')
let flag = true

btn.addEventListener('click', function () {
    flag = !flag
    if (flag) {
        div.style.backgroundColor = 'hotpink'
    } else {
        div.style.backgroundColor = 'skyblue'
    }
})