
(window.$ = function(str) {
    var arrElm = document.querySelectorAll(str);
    $.addClass = function (value) {
        if (typeof value == 'string') {
            arrElm.forEach(function(item) {
                item.classList.add(...value.replace(/ +/, ' ').split(' '));
            })
        }
        else if (typeof value == 'function') {

        }

    }
    return $;

})();




