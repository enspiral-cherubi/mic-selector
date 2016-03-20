# mic-selector

returns a jQuery `select` element populated with `option` elements for all available microphone inputs. on change, the element triggers a 'bang' event with a `MediaStreamAudioSourceNode` for the chosen input.

## install

`npm i --save mic-selector`

## usage

```js
var $ = require('jquery')
var audioCtx = new (window.AudioContext || window.webkitAudioContext)()
var $micSelector = require('mic-selector')(audioCtx)

$micSelector.on('bang', function (e, node) {
  node.connect(audioCtx.destination)
})

$('body').append($micSelector)
```

![eyy](http://i.imgur.com/HqHJ2S2.png)
