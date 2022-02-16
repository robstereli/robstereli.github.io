$(document).ready(function(){
    $(document).scroll(function(){
        var x = $(this).scrollTop();
        if(x > 1) {
            $(".navigation-container").addClass('sticky');
        }
    });
});