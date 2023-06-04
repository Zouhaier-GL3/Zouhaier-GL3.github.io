tippy('.avatar')

// slow navigaton Animation
$(document).on("click","a",function(e){
    e.preventDefault();
    var id = $(this).attr("href"),
        topSpace = 30;

    $('html, body').animate({
      scrollTop: $(id).offset().top - topSpace
    }, 800);
});

function redirectToCv() {
    window.open("https://www.linkedin.com/in/zouhaier-barrouta/overlay/1635527543350/single-media-viewer/?profileId=ACoAABrPha0BVp17FEdC7Q0Ja9k6UgSNO8QpkaA", "_blank");
}
function redirectToFacebook() {
    window.open("https://www.facebook.com/zouhaier.barrouta.9", "_blank");
}
function redirectToLinkedin() {
    window.open("https://www.linkedin.com/in/zouhaier-barrouta/", "_blank");
}

function redirectToAddinn(){
    window.open("https://addinn-group.com", "_blank");
}
function redirectToItqan() {
    window.open("https://itqanlabs.com", "_blank");
}
function redirectToMgnic() {
    window.open("http://www.made-in-tunisia.net/vitrine/contact.php?tc1=lKyYnquW", "_blank");
}

function redirectToGit() {
    window.open("https://github.com/Zouhaier-GL3")
}
tippy('a', {
    duration: 0,
    arrow: false,
    delay: [1000, 200]
});