var marked = require('marked'),
    fs = require('fs');

fs.readFile('test.md', 'utf8', function(err, data) {
    console.log(marked(data));
});
