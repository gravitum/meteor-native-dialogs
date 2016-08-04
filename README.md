gravitum:native-dialogs
=======================

Meteor package which provides native dialog for android and ios with multiple buttons and callbacks.Falls back to bootstrap modal based version in browser.



Usage
-----



### `Dialogs.alert(message)`

### `Dialogs.confirm(message?,[buttonLabels]?, callback, [callback1, [callback2]...])`

* `Date`: String, message to display, optional
* `buttonLabels`: Array of Strings for the texts on buttons. e.g. ["Yes", "Maybe", "Cancel"]
* `callback`:  Function. Called when appropriate button is clicked.

Sample.
-------

Dialogs.confirm("Did you click me?", ["Yes", "No"], function(){
  Dialogs.alert("You are a hero")
})

## Contributing

Anyone is welcome to contribute. Fork, make your changes, and then submit a pull request.



