/*
---
description: Minimize CSS for faster download from the browser.

license: MIT-style

authors:
- Jean-Nicolas Boulay Desjardins (http://jean-nicolas.name/)

requires:
 core/1.3:   '*'

provides:
- minimizeCode

...
*/

var minimizeCode = new Class({
    css: function(css){
        return css.replace( /\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, '')
                  .replace( / {2,}/g, ' ')
                  .replace( / ([{:}]) /g, '$1')
                  .replace( /([;,]) /g, '$1')
                  .replace( / !/g, '!');
    }
});
