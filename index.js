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

  $selector.change(function (sourceId) {
    navigator.mediaDevices.getUserMedia({
      audio: { optional: [{ sourceId: sourceId }] }
    }).then(function (stream) {
      var node = context.createMediaStreamSource(stream)
      $selector.trigger('bang', node)
    })
  })

  return $selector
}

module.exports = micSelector
