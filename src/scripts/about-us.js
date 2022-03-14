$(document).ready(() => {
    $jakeImage = $('.leaders-jake-image')
    $hoverJake = $('.hover-jake')

    $jakeImage.on('mouseenter', (event) => {
        $(event.currentTarget).addClass($hoverJake)
        $hoverJake.show()
    }).on('mouseleave', () => {
        $hoverJake.hide()
    })

})

$(document).ready(() => {
    $smithImage = $('.leaders-Smith-image')
    $hoverSmith = $('.hover-smith')

    $smithImage.on('mouseenter', (event) => {
        $(event.currentTarget).addClass($hoverSmith)
        $hoverSmith.show()
    }).on('mouseleave', () => {
        $hoverSmith.hide()
    })

})

$(document).ready(() => {
    $jacksonImage = $('.leaders-Jackson-image')
    $hoverJackson = $('.hover-jackson')

    $jacksonImage.on('mouseenter', (event) => {
        $(event.currentTarget).addClass($hoverJackson)
        $hoverJackson.show()
    }).on('mouseleave', () => {
        $hoverJackson.hide()
    })

})

$(document).ready(() => {
    $mariaImage = $('.leaders-Maria-image')
    $hoverMaria = $('.hover-maria')

    $mariaImage.on('mouseenter', (event) => {
        $(event.currentTarget).addClass($hoverMaria)
        $hoverMaria.show()
    }).on('mouseleave', () => {
        $hoverMaria.hide()
    })

})

const openMenu = document.querySelector(".mobile-menu");
const popUp = document.querySelector(".pop-up");
const closeMenu = document.querySelector(".close-button");
popUp.style.visibility = "hidden";
closeMenu.style.visibility = "hidden";

openMenu.addEventListener("click", () => {
    popUp.style.visibility = "visible";
    openMenu.style.display = "none";
    closeMenu.style.visibility = "visible";
})
closeMenu.addEventListener("click", () => {
    popUp.style.visibility = "hidden";
    closeMenu.style.visibility = "hidden";
    openMenu.style.display = "block";
})