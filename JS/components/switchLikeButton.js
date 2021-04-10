import { likeSection } from "../main.js"

export function switchLikedToggle() {
    
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