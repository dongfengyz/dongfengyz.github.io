define([],
function() {
    return {
        page: 1,
        offset: 20,
        init: function() {
            var o = this;
            $.getJSON("/photos/output.json",
            function(e) {
                o.render(o.page, e),
                o.scroll(e)
            })
        },
        render: function(o, e) {
            var t = (o - 1) * this.offset,
            i = o * this.offset;
            if (! (t >= e.length)) {
                for (var n = "",
                r = t; i > r && r < e.length; r++) n += '<li><div class="img-box"><a class="img-bg" rel="example_group" href="https://o48qtc2r4.qnssl.com/' + e[r] + '"></a><img lazy-src="https://o48qtc2r4.qnssl.com/' + e[r] + '?imageView2/1/w/200/h/200/interlace/1" /></li>';
                $(".img-box-ul").append(n),
                $(".img-box-ul").lazyload(),
                $("a[rel=example_group]").fancybox()
            }
        },
        scroll: function(o) {
            var e = this;
            $(window).scroll(function() {
                var t = window.pageYOffset,
                i = t + window.innerHeight,
                n = 0,
                r = $(".photos").offset().top + $(".photos").height();
                r >= t && i + n > r && e.render(++e.page, o)
            })
        }
    }
});