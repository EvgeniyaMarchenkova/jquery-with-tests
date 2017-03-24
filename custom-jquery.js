
(window.$ = function(str) {
    var arrElm = document.querySelectorAll(str);
    window.$.addClass = function (value) {
        var index = 0;
        [].forEach.call(arrElm, function(item) {
            if (typeof value == 'string') {
                addClassElm(item, value);
            }
            else if (typeof value == 'function') {
                var result = value(index, item.className);
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
                return function(selector) {
                    console.log(selector);
                    var node = document.querySelector(selector);
                    item.appendChild(node);
                }



                item.appendChild(node);
                //node.remove();
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
    window.$.css = function(value) {
        if (typeof value == 'string') {
            return arrElm[0].style.value;
        }
        else {
            value.toString = function() {
                var str = '';
                for (key in value) {
                    str += key + ':' + value.key + '; ';
                }
                return str;
            }
            arrElm[0].style.cssText = value.toString();
        }
    }
    window.$.on = function(evnt, func) {
        [].forEach.call(arrElm, function(item) {
            item.setAttribute('on' + evnt, func);
        })
    }
    window.$.on = function(evnt, func) {
        [].forEach.call(arrElm, function(item) {
            var isCalled = false;
            if (isCalled) {
                isCalled = true;
                item.setAttribute('on' + evnt, func);
            }
        })
    }

    window.$.each = function(func) {
        [].forEach.call(arrElm, function(item) {
            func.apply(item, func.arguments);
        })
    }
    return window.$;
})();




