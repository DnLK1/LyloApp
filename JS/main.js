//Side menu animation on mobile

const sideMenu = $(".side-menu")
const toggleSideMenu = $(".header__mobile-menu")
const closeSideMenu = $(".side-menu__close-icon")
const overlay = $(".overlay")

toggleSideMenu.click(function() {
    sideMenu.show("slide")
    overlay.show()
    $('html, body').css({
        overflow: 'hidden',
        height: '100%'
    });
})

closeSideMenu.click(function() {
    sideMenu.hide("slide")
    overlay.hide()
    $('html, body').css({
        overflow: 'auto',
        height: 'auto'
    });
})

//Like button interaction

const likeSection = $(".feed__post___review--like-section")

function switchLikedToggle() {
    
    const findLikeID = $(this).children("img").each(function() {
        $(this).attr("id")
    })

    findLikeID.toggle()


    const findLikedCount = $(this).children("p").text()
    const findLikedStatus = $(this).children("p").attr("class")
    const LikedStatus = $(this).children("p")

    if (findLikedStatus == "unliked") {
        const likedCountPlusOne = parseInt(findLikedCount) + 1

        JSON.stringify($(this).children("p").text(likedCountPlusOne))

        LikedStatus.toggleClass("unliked")
    }else{
        const likedCountMinusOne = parseInt(findLikedCount) - 1

        JSON.stringify($(this).children("p").text(likedCountMinusOne))

        LikedStatus.toggleClass("unliked")
    }
}

likeSection.click(switchLikedToggle)