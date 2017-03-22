
(window.$ = function(str) {
    var arrElm = document.querySelectorAll(str);
    window.$.addClass = function (value) {
        var index = 0;
        [].forEach.call(arrElm, function(item) {
            if (typeof value == 'string') {
                addClassElm(item, value);
            }
            else if (typeof value == 'function') {
                var result = value(index);
                index++;
                addClassElm(item, result);
            }
            function addClassElm(elm, elmClassName) {
                elm.classList.add(...elmClassName.replace(/ +/, ' ').split(' '));
            }
        })
    }
    window.$.append = function (value) {

        [].forEach.call(arrElm, function(item) {
            if (typeof value == 'function') {
                console.log(value.arguments)
                var insert = document.querySelector(value.arguments[0]);
                item.innerHTML += insert;
                insert.remove();
            }
            else {
                item.innerHTML += value;
            }
        })

    }
    window.$.html = function(value) {
        if (!value) {
            return arrElm[0].innerHTML;
        }
        else {
            [].forEach.call(arrElm, function(item) {
               item.innerHTML = value;
            })
        }
    }
    window.$.attr = function(...value) {
        if (value.length == 2) {
            [].forEach.call(arrElm, function(item) {
                item.setAttribute(value[0], value[1]);
            })

        }
        return arrElm[0].getAttribute(value);
    }
    window.$.children = function(value) {
        if (!value) {
            return arrElm[0].children;
        }
        return [].filter.call(arrElm[0].children, function(item){
            if (item.matches(value)) return true;
            return false;
        })

    }

    return window.$;

})();




