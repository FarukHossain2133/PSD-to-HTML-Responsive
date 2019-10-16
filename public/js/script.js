// function $(selector){
//     return document.querySelector(selector);
// }

// $('#nav_button').addEventListener('toggle', function(){
//     $('body').style.filter = 'brightness(50%)'
// })

$(function(){
    $('#accordionExample').on('shown.bs.collapse', function(){
       $shown = $(this).find('.show');
       $target = $shown.parent().find('.text-primary');
       $target.removeClass('fa-chevron-down')
            .addClass('fa-chevron-up')
    });

    $('#accordionExample').on('hidden.bs.collapse', function () {
        $('#accordionExample>.card>.card-header>.text-primary')
        .removeClass('fa-chevron-up')
        .addClass('fa-chevron-down');
      })

});



