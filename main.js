(function($) {
    "use strict";


    jQuery(document).ready(function($) {
// mneu-js start
   jQuery(".header-menu a").click(function () {
       jQuery(".et-lb-btn").removeClass("active-menu");
       jQuery(".et-lb-content").removeClass("et-lb-open");
      
        });

      jQuery('.et-lb-btn').click(function() {
    jQuery(this).toggleClass("active-menu");
    jQuery(".et-lb-content").toggleClass("et-lb-open");
}); 


// mneu-js end

// mobile menu

    jQuery(function($) {
        $(document).ready(function() {
            $("body ul.et_mobile_menu li.menu-item-has-children, body ul.et_mobile_menu  li.page_item_has_children").append('<a href="#" class="mobile-toggle"></a>');
            $('ul.et_mobile_menu li.menu-item-has-children .mobile-toggle, ul.et_mobile_menu li.page_item_has_children .mobile-toggle').click(function(event) {
                event.preventDefault();
                $(this).parent('li').toggleClass('dt-open');
                $(this).parent('li').find('ul.children').first().toggleClass('visible');
                $(this).parent('li').find('ul.sub-menu').first().toggleClass('visible');
            });
            iconFINAL = 'P';
            $('body ul.et_mobile_menu li.menu-item-has-children, body ul.et_mobile_menu li.page_item_has_children').attr('data-icon', iconFINAL);
            $('.mobile-toggle').on('mouseover', function() {
                $(this).parent().addClass('is-hover');
            }).on('mouseout', function() {
                $(this).parent().removeClass('is-hover');
            })
        });
    });

// isScrolledIntoView js

function isScrolledIntoView(elem) {
            var docViewTop = jQuery(window).scrollTop();
            var docViewBottom = docViewTop + jQuery(window).height();

            var elemTop = jQuery(elem).offset().top;
            var elemBottom = elemTop + jQuery(elem).height();

            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }

        jQuery(window).scroll(function () {
            jQuery('.border-animation-area').each(function () {
                if (isScrolledIntoView(this) === true) {
                    jQuery(this).addClass('border-animation');
                }else{
                    jQuery(this).removeClass('border-animation');
                }
            });

            jQuery('.img-border-animation').each(function () {
                if (isScrolledIntoView(this) === true) {
                    jQuery(this).addClass('border-animation');
                }else{
                    jQuery(this).removeClass('border-animation');
                }
            });

        });

            });

}(jQuery));
