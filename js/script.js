$(function(){
    $('.collapse-item').on('show.bs.collapse' , function(){
        $(this).find('.fas').removeClass().addClass('fas fa-minus-circle');
    })
    $('.collapse-item').on('hide.bs.collapse' , function(){
        $(this).find('.fas').removeClass().addClass('fas fa-plus-circle');
    })
})