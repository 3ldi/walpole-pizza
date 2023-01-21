
    document.addEventListener('DOMContentLoaded', function(){
        /* add click handler for Gallery */
        document.getElementById('gallery-links').onclick = function (event) {
            event = event || window.event;
            var target = event.target || event.srcElement; 
            var link = target.src ? target.parentNode : target;
            console.log(link);
            var options = { index: link, event: event };
            var links = this.querySelectorAll("a");
            blueimp.Gallery(links, options);
        }
    });