$(document).ready(function () {
    $(".navbar a, #contact a[href='#top']").click(function () {
        $('html').animate({scrollTop: $(this.hash).offset().top}, 1000);
    });
});