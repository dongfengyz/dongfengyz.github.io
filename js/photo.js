define([],
function() {
    return {
        page: 1,
        offset: 20,
        init: function() {
            var t = this;
            $.getJSON("/photo/output.json",
            function(e) {
                t.render(t.page, e),
                t.scroll(e)
            })
        },
        render: function(t, e) {
            var o = (t - 1) * this.offset,
            n = t * this.offset;
            if (! (o >= e.length)) {
                for (var a = "",
                i = o; i < n && i < e.length; i++) a += '<li><div class="img-box">
				<a class="img-bg" rel="example_group"
					href="http://o6y0q0v31.bkt.clouddn.com/' + e[i] + '"></a>
				<img lazy-src="http://o6y0q0v31.bkt.clouddn.com/' + e[i] + '?imageView2/1/w/200/h/200/interlace/1" /></li>';
                $(".img-box-ul").append(a),
                $(".img-box-ul").lazyload(),
                $("a[rel=example_group]").fancybox()
            }
        },
        scroll: function(t) {
            var e = this;
            $(window).scroll(function() {
                var o = window.pageYOffset,
                n = o + window.innerHeight,
                a = 0,
                i = $(".instagram").offset().top + $(".instagram").height();
                i >= o && i < n + a && e.render(++e.page, t)
            })
        }
    }
});