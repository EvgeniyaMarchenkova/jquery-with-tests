
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
            if (this[node].nodeType == 1) {
                if (typeof value == 'string') {
                    addClassElm(this[node], value);
                }
                else if (typeof value == 'function') {
                    var result = value(index, this[node].className);
                    index++;
                    addClassElm(this[node], result);
                }
                function addClassElm(elm, elmClassName) {
                    if(/ /.test(elmClassName)) {
                        elm.classList.add(...elmClassName.replace(/ +/, ' ').split(' '));
                    }
                    else elm.classList.add(elmClassName);
                }
            }
        }
    }
    CustomJquery.prototype.append = function (value) {
        for (node in this) {
            if (this[node].nodeType == 1) {
                if (typeof value == 'object') {
                    if (document.querySelector(value.selector)) {
                        if (node == 0) {
                            this[node].appendChild(document.querySelector(value.selector));
                        }
                        else {
                            this[node].appendChild(document.querySelector(value.selector).cloneNode(true));
                        }
                    }
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
                if (this[node].nodeType == 1) {
                    this[node].innerHTML = value;

                }
            }
        }
    }
    CustomJquery.prototype.attr = function(...value) {
        if (value.length == 2) {
            for (node in this) {
                if (this[node].nodeType == 1) {
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
        for (node in this) {
            if (this[node].nodeType == 1) {
                return [].filter.call(this[node].children, function(item){
                    if (item.matches(value)) return true;
                    return false;
                })
            }
        }
    }
    CustomJquery.prototype.css = function(value) {
        if (typeof value == 'string') {
            return this[0].style[value];
        }
        else {
            value.toString = function() {
                var str = '';
                for (key in value) {
                    if (typeof value[key] != 'function') {
                        str += key + ':' + value[key] + '; ';
                    }
                }
                return str;
            }
            for (node in this) {
                if (this[node].nodeType == 1) {
                    this[node].style.cssText = value.toString();
                }
            }
        }
    }
    CustomJquery.prototype.on = function(evnt, func) {
        for (node in this) {
            if (this[node].nodeType == 1) {
                this[node].setAttribute('on' + evnt, func);

            }
        }
    }
    CustomJquery.prototype.one = function(evnt, func) {
        for (node in this) {
            if (this[node].nodeType == 1) {
                let isCalled = false;
                if (!isCalled) {
                    isCalled = true;
                    this[node].setAttribute('on' + evnt, func);
                }

            }
        }
    }

    CustomJquery.prototype.data = function(key, value) {
        for (node in this) {
            if (this[node].nodeType == 1) {
                if (arguments.length == 0) return this[node].dataset;
                if (key && !value) {
                    if (typeof key == 'object') {
                        for (keyOfObjParam in key) {
                            this[node].dataset[keyOfObjParam] = key[keyOfObjParam];
                        }
                    }
                    else {
                        return this[node].dataset[key];
                    }
                }
                if (key && value) {
                    this[node].dataset[key] = value;
                }
            }
        }
        return this[node].dataset;
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




