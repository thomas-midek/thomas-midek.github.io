const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper')

portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover', () => {
        portfolioItem.childNodes[1].classList.add('img-darken')
    })
    portfolioItem.addEventListener('mouseout', () => {
        portfolioItem.childNodes[1].classList.remove('img-darken')
    })
})

function appendBar() {
    const profileText = document.getElementById("blink")
    profileText.style.display = "none"
    setTimeout(removeBar, 530)
}

function removeBar() {
    const profileText = document.getElementById("blink")
    profileText.style.display = "inline"
    setTimeout(appendBar, 530)
}