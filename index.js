var $ = require('jquery')

var micSelector = function (context) {
  var $selector = $('<select></select>')

  MediaStreamTrack.getSources(function (sources) {
    sources.forEach(function (source, i) {
      if (source.kind === 'audio') {
        var val = source.id, text = source.label || 'input ' + (i + 1)
        $option = $('<option></option>').val(val).text(text)
        $selector.append($option)
      }
    })
  })

  $selector.change(function (e) {
    // taken from https://www.airtightinteractive.com/demos/js/pareidolia/
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia

    sourceId = this.value

    if (navigator.getUserMedia) {
  		navigator.getUserMedia({audio: { optional: [{ sourceId: sourceId }] }},
         onSuccess,
          onError)
  	} else {
      console.log('couldnt getUserMedia')
  	}
  })

  function onSuccess (stream) {
    var node = context.createMediaStreamSource(stream)
    $selector.trigger('bang', node)
  }

  function onError (err) {
    console.log('mysterious sound error')
  }


  return $selector
}


module.exports = micSelector
