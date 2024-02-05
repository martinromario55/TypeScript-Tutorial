"use strict";
function detectType(val) {
    if (typeof val === 'number') {
        return 'number';
    }
    else if (typeof val === 'string') {
        return 'string';
    }
}
function provideId(id) {
    if (!id) {
        console.log('Please provide ID');
        return;
    }
    id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === 'object') {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === 'string') {
            console.log(strs);
        }
    }
}
