var micSelector = function () {
  var selector = document.createElement('select')

  MediaStreamTrack.getSources(function (sources) {
    sources.forEach(function (source, i) {
      if (source.kind === 'audio') {
        var option = document.createElement('option')
        option.value = source.id
        option.text = source.label || 'input ' + (i + 1)
        selector.appendChild(option)
      }
    })
  })

  return selector
}

module.exports = micSelector
