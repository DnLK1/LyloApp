const sideMenu = $(".side-menu")
const toggleSideMenuIcon = $(".header__mobile-menu")
const closeSideMenu = $(".side-menu__close-icon")
const overlay = $(".overlay")

export function toggleSideMenu() {
    
    toggleSideMenuIcon.click(function() {
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
    
    }