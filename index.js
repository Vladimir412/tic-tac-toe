const array = document.querySelectorAll('.square');
const container = document.querySelector('.main');
let flag = false;

const newArray = Array.from(array)
newArray.forEach(el => {
    el.addEventListener('click', function(e) {
        if (!el.hasAttribute('inert')) {
            if (!flag && !checkDisplayBlock(el)) {
                const element = getBlock(el, '.sign')
                element.style.display = 'block'
                el.setAttribute('inert', true)
            } 
            if (flag && !checkDisplayBlock(el)) {
                const element = getBlock(el, '.circle')
                element.style.display = 'block'
                el.setAttribute('inert', true)
            }
            flag = !flag 
        }
    })
})

function checkDisplayBlock(element) {
    return (element.querySelector('.sign').style.display === 'block' || element.querySelector('.circle').style.display === 'block')
}

function getBlock(element, selector) {
    return element.querySelector(selector)
}