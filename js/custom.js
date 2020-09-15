jQuery(document).ready(function () {
    $(".flex-block:nth-child(3n)").after('<div class="clearfix"></div>');

    AOS.init({
      duration: 900,
    });

    
});