
window.$ = function (selector, context) {
    function CustomJquery(selector) {
        var arrElm = document.querySelectorAll(selector);
        for (var i = 0; i < arrElm.length; i++) {
            this[i] = arrElm[i];
        }
        this.selector = selector;
    }
    CustomJquery.prototype.addClass = function (value) {
        var index = 0;
        for (node in this) {
            if (/^[0-9]+$/.test(node)) {
                if (typeof value == 'string') {
                    addClassElm(this[node], value);
                }
                else if (typeof value == 'function') {
                    var result = value(index, this[node].className);
                    index++;
                    addClassElm(this[node], result);
                }
                function addClassElm(elm, elmClassName) {
                    elm.classList.add(...elmClassName.replace(/ +/, ' ').split(' '));
                }
            }
        }
    }
    CustomJquery.prototype.append = function (value) {
        for (node in this) {
            if (/^[0-9]+$/.test(node)) {
                if (typeof value == 'function') {
                    return function(selector) {
                        var node = document.querySelector(selector);
                        item.appendChild(node);
                    }



                    item.appendChild(node);
                    //node.remove();
                }
                else {
                    this[node].innerHTML += value;
                }
            }
        }
    }
    CustomJquery.prototype.html = function(value) {
        if (!value) {
            return this[0].innerHTML;
        }
        else {
            for (node in this) {
                if (/^[0-9]+$/.test(node)) {
                    this[node].innerHTML = value;

                }
            }
        }
    }
    CustomJquery.prototype.attr = function(...value) {
        if (value.length == 2) {
            for (node in this) {
                if (/^[0-9]+$/.test(node)) {
                    this[node].setAttribute(value[0], value[1]);

                }
            }
        }
        return this[0].getAttribute(value);
    }
    CustomJquery.prototype.children = function(value) {
        if (!value) {
            return this[0].children;
        }
        return [].filter.call(this[node].children, function(item){
            if (item.matches(value)) return true;
            return false;
        })

    }
    CustomJquery.prototype.css = function(value) {
        if (typeof value == 'string') {
            return this[0].style.value;
        }
        else {
            value.toString = function() {
                var str = '';
                for (key in value) {
                    str += key + ':' + value.key + '; ';
                }
                return str;
            }
            this[0].style.cssText = value.toString();
        }
    }
    CustomJquery.prototype.on = function(evnt, func) {
        for (node in this) {
            if (/^[0-9]+$/.test(node)) {
                this[node].setAttribute('on' + evnt, func);

            }
        }
    }
    CustomJquery.prototype.one = function(evnt, func) {
        for (node in this) {
            if (/^[0-9]+$/.test(node)) {
                let isCalled = false;
                if (isCalled) {
                    isCalled = true;
                    this[node].setAttribute('on' + evnt, func);
                }

            }
        }

    }
    CustomJquery.prototype.each = function (func) {
        [].forEach.call(this, function(item) {
            func.apply(item, func.arguments);
        })
    }





    return new CustomJquery(selector);
};
/*







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
 */




