/*globals jQuery, document, window */

(function ($) {
    "use strict";

    $(document).ready(function(){
        $('.mdl-card__media').each(function(index, el) {
            var $el = $(el);
            var $link = $el.find('a');
            if (!$link) {
                return;
            }
            var target = $link.attr('href');
            if (!target) {
                return;
            }
            $el.click(function() {
                window.location.href = target;
            });
        });
    });

}(jQuery));
