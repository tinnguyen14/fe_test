document.querySelector('.nav').onclick=() => {
    document.querySelector('.menu').classList.toggle('active')
    document.querySelector('.nav img').classList.toggle('active')
    document.querySelector('body').classList.toggle('active')
}