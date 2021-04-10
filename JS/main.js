//Side menu animation on mobile

import { toggleSideMenu } from "./components/toggleSideMenu.js"

toggleSideMenu()

//Like button interaction

export const likeSection = $(".feed__post___review--like-section")

import { switchLikedToggle } from "./components/switchLikeButton.js"

likeSection.click(switchLikedToggle)

//Star rating interaction

const starRating = $(".feed__post___review--stars")

starRating.click(function(){

    if ($(this).siblings("svg").hasClass("star-active")) {
        $(this).siblings("svg").removeClass("star-active")
    }

    $(this).toggleClass("star-active")

})