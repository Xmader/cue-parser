# About

cue-parser is an cue-sheet parser library written for nodejs.
Most of the code is inspired by [cue-go](https://github.com/vchimishuk/cue-go)

# install

```
npm install https://github.com/Xmader/cue-parser.git
```

# How to use

```javascript
const fs = require("fs")
const cue = require("cue-parser")

const cueFileStr = fs.readFileSync("filename.cue", "utf-8")
const cuesheet = cue.parse(cueFileStr)

console.log(cuesheet.performer);
console.log(cuesheet.files);
console.log(cuesheet.files[0].tracks);
```

# References

- [Cue sheet format kodi.wiki](http://kodi.wiki/view/Cue_sheets)
- [Cue sheet format from wiki.hydrogenaud.io](http://wiki.hydrogenaud.io/index.php?title=Cue_sheet)
