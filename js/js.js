/*global $, alert, console*/

$(function () {
   
    'use strict';
    
    // Adjust Header Height
    
    var myHeader = $('.header'),
        
        mySlider = $('.bxslider');
    
    myHeader.height($(window).height());
    
    $(window).resize(function () {
       
        myHeader.height($(window).height());
        
        // Adjust Bxslider List Item Center
        
        mySlider.each(function () {

            $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);

        });
        
    });
    
    // Links Add Active Class
    
    $('.links li a').click(function () {
       
        $(this).parent().addClass('active').siblings().removeClass('active');
        
    });
    
    // Adjust Bxslider List Item Center
    
    mySlider.each(function () {
       
        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
        
    });
    
    // Trigger The Bx Slider
    
    mySlider.bxSlider({
        
        pager: false
        
    });
    
    // Smooth Scroll To Div 
    
    $('.links li a').click(function () {
       
        $('html, body').animate({
            
            scrollTop: $('#' + $(this).data('value')).offset().top
            
        }, 1000);
        
        console.log('#' + $(this).data('value'));
        
    });
    
    // Our Auto Slider Code
    
     (function autoslider()
    {
        $('.slider .active').each(function(){
            if (!$(this).is(':last-child')) {
                $(this).delay(3000).fadeOut(1000,function(){
                $(this).removeClass('active').next().addClass('active').fadeIn();
                autoslider();
                });
                
            }else {
                $(this).delay(3000).fadeOut(function(){
                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    autoslider();
                    });
            }
            })
        
        
    }());
    
    // Trigger MixitUp
    $('#container').mixItUp();
    $('.shuff li').click(function(){
    $(this).addClass('select').siblings().removeClass('select');
    });
    
    // Trigger Nice Scroll
    
        $('html').niceScroll({
        
        cursorcolor: '#1abc9c',
        
        cursorwidth: '8px',
        
        cursorborder: '1px solid #1abc9c',
        
        cursorborderradius: 0
        
    });
    
});