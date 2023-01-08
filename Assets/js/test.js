var button = $("button")
var person = $("#person")
var counter = $("#count")
var personObj = JSON.parse(localStorage.getItem('person'))

counter.text(personObj.count)

button.on('click', function() {
    personObj.count++
    counter.text(personObj.count)
    localStorage.setItem('person', JSON.stringify({
        person: person.text(),
        count: personObject.count
    }))
})

// var button = $("button")
// var counterEl = $("h3")
// var counterText = counterEl.text()
// // var counter = parseInt(counterText)
// var counter = parseInt(localStorage.getItem('counterVal')) || parseInt(counterText)

// counterEl.text(counter)