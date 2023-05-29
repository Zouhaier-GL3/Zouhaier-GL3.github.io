tippy('.avatar')

// scroll top
function scrollTopAnimated() {
    $("html, body").animate({ scrollTop: "0" });
}

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

function redirectToAdinn() {
    window.open("https://www.bing.com/search?q=addinn&cvid=4a1f5db0537e41d69d8224298c98f8e2&aqs=edge.0.69i59j69i57j0j69i59j46j69i59j69i61j69i60l2j69i11004.2054j0j9&FORM=ANAB01&PC=U531", "_blank");
}
function redirectToItqan() {
    window.open("https://itqanlabs.com", "_blank");
}
function redirectToMgnic() {
    window.open("http://www.made-in-tunisia.net/vitrine/contact.php?tc1=lKyYnquW", "_blank");
}

