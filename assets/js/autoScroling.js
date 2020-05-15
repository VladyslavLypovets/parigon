(function($) {
    $.fn.autoscroll = function(options) {
        var settings = $.extend({}, $.fn.autoscroll.defaults, options);
        if (options && options.bottom) {
            return this.each(function() {
                var $this = $(this);
                if ($this.length > 0 &&
                    $this[0].scrollHeight > $this[0].clientHeight) {
                    var scrollTimer,
                        scrollTop = 210;
                    var itemLength = $this.scrollTop(0).children().length;
    
                    function scrollList() {
                        var itemHeight = $this.children().eq(1).outerHeight(true);
                        
                        
                        scrollTop--;
                        if (scrollTop <= 0) {
                            $this.scrollTop(0).children().eq(itemLength - 1).prependTo($this);
                            scrollTop = itemHeight;
                        } else {
                            $this.scrollTop(scrollTop);
                        }
                    }
                    $this.hover(function() {
                        // clearInterval(scrollTimer);
                        // if (settings.hideScrollbar) {
                        //     $this.addClass("hide-scrollbar");
                        // }
                        // if ($.type(settings.handlerIn) === "function") {
                        //     settings.handlerIn();
                        // }
                    }, function() {
                        if (!scrollTimer) {
                            scrollTimer = setInterval(function() {
                                scrollList();
                            }, settings.interval);
                        }
                        // if ($.type(settings.handlerOut) === "function") {
                        //     settings.handlerOut();
                        // }
                    }).trigger("mouseleave");
                }
            });
        }
        return this.each(function() {
            var $this = $(this);
            if ($this.length > 0 &&
                $this[0].scrollHeight > $this[0].clientHeight) {
                var scrollTimer,
                    scrollTop = 0;

                function scrollList() {
                    var itemHeight = $this.children().eq(1).outerHeight(true);
                    scrollTop++;
                    if (scrollTop >= itemHeight) {
                        $this.scrollTop(0).children().eq(0).appendTo($this);
                        scrollTop = 0;
                    } else {
                        $this.scrollTop(scrollTop);
                    }
                }
                $this.hover(function() {
                    // clearInterval(scrollTimer);
                    if (settings.hideScrollbar) {
                        $this.addClass("hide-scrollbar");
                    }
                    if ($.type(settings.handlerIn) === "function") {
                        settings.handlerIn();
                    }
                }, function() {
                    if (!scrollTimer) {
                        scrollTimer = setInterval(function() {
                            scrollList();
                        }, settings.interval);
                    }
                    if ($.type(settings.handlerOut) === "function") {
                        settings.handlerOut();
                    }
                }).trigger("mouseleave");
            }
        });
    }
    $.fn.autoscroll.defaults = {
        interval: 25,
        hideScrollbar: true,
        handlerIn: null,
        handlerOut: null

    };
})(jQuery);