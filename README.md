About
=======
cue-parser is an cue-sheet parser library written for nodejs.
Most of the code is inspired by [cue-go](https://github.com/vchimishuk/cue-go)

[![Build Status](https://travis-ci.org/justlaputa/cue-parser.png)](https://travis-ci.org/justlaputa/cue-parser)

How to use
=======
Add dependency in your `package.json` file:

```json
{
    "dependencies": {
        "cue-parser": "0.1.0"
    }
}
```

use it in you node source code

```javascript
var parser = require('cue-parser');

var cuesheet = parser.parse('filename.cue');

console.log(cuesheet.performer);
console.log(cuesheet.files);
console.log(cuesheet.files[0].tracks);
```

References
==========

- [Cue sheet format kodi.wiki](http://kodi.wiki/view/Cue_sheets)
- [Cue sheet format from wiki.hydrogenaud.io](http://wiki.hydrogenaud.io/index.php?title=Cue_sheet)
