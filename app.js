const root = document.querySelector('#root')
const block = document.createElement('div')
root.append(block)
block.classList.add('block')
const points = document.createElement('div')
points.classList.add('points')
block.append(points)

const massPoints = []
let imageIndex = 0

for (let i = 0; i < 4; i++) {
    const point = document.createElement('p')
    point.classList.add('point')
    points.append(point)
    massPoints.push(point)
    point.addEventListener('click', () => {
        massPoints.forEach(item => {
            item.classList.remove('active')
        })
        imageIndex = i
        massPoints[imageIndex].classList.add('active')
        block.style.backgroundImage = `url(image/${imageIndex}.jpeg)`
        clearInterval(eventHandler, 2000)
    })
}

massPoints[imageIndex].classList.add('active')
block.style.backgroundImage = `url(image/${imageIndex}.jpeg)`

const leftBtn = document.createElement('button')
leftBtn.classList.add('leftBtn')
block.append(leftBtn)

const rightBtn = document.createElement('button')
rightBtn.classList.add('rightBtn')
block.append(rightBtn)

leftBtn.addEventListener('click', () => {
    imageIndex--
    if (imageIndex == -1) {
        imageIndex = 3
    }
    massPoints.forEach(item => {
        item.classList.remove('active')
    })
    block.style.backgroundImage = `url(image/${imageIndex}.jpeg)`
    massPoints[imageIndex].classList.add('active')

    clearInterval(eventHandler, 2000)
})

rightBtn.addEventListener('click', () => {
    imageIndex++
    if (imageIndex == 4) {
        imageIndex = 0
    }
    massPoints.forEach(item => {
        item.classList.remove('active')
    })
    massPoints[imageIndex].classList.add('active')
    block.style.backgroundImage = `url(image/${imageIndex}.jpeg)`
})

const eventHandler = setInterval(() => {
    let event = new Event('click')
    rightBtn.dispatchEvent(event)
}, 2000)

eventHandler()
