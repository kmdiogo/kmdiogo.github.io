var Module = {
    print: (function() {
        var element = document.getElementById('output');
        return function(text) {
            element.innerHTML += text + "\n";
            element.scrollTop = element.scrollHeight;
        };
    })(),
    printErr: function(text) {
        if (arguments.length > 1) text = Array.prototype.slice.call(arguments).join(' ');
        if (0) {
            dump(text + '\n');
        }
    },
    canvas: (function() {
        var canvas = document.getElementById('canvas');
        return canvas;
    })()
};