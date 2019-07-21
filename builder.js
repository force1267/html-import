const fs = require('fs');
const file = process.argv[2];
const out = process.argv[3] ? process.argv[3] : "bundle.html";


const imports = {};

function prepare(file, depth = 0, max_depth = 10) {
    if(depth > max_depth) {
        throw `maximum depth, max_depth = ${max_depth}`;
    }
    var html = fs.readFileSync(`./${file.slice(file.length - 5) == ".html" ? file : `${file}.html`}`).toString();
    var ioi;
    while((ioi = html.indexOf("<import ")) != -1) {
        var ioe = ioi + 9;
        while(html[++ioe] != ">");
        var name = html.slice(ioi + 8, ioe).split(" ").join("");
        var include = prepare(name, depth + 1, max_depth);
        html = html.slice(0, ioi) + include + html.slice(ioe + 1);
    }
    
    return html;
}

fs.writeFileSync(`./${out}` ,prepare(file));
