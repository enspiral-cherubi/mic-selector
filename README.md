# mic-selector

returns a `<select>` tag populated with `<option>` tags for all available microphone inputs

## install

`npm i --save mic-selector`

## usage

```js
var $ = require('jquery')
var micSelector = require('mic-selector')

var $micSelector = $(micSelector)
$('body').append($micSelector)
```

![eyy](http://i.imgur.com/HqHJ2S2.png)
