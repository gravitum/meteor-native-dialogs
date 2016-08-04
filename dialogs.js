Dialogs = {
  confirm: function(){
    // # array , functions
    // # 
    var functions, buttonsLabels,  args, message;
    if(_.isString(arguments[0])){
      message = arguments[0]
      args = Array.prototype.slice.call(arguments, 1)
    } else {
      message = "Sure?"
      args = Array.prototype.slice.call(arguments)
    }
    if(_.isArray(args[0])){
     functions =  args.slice( 1)
     buttonsLabels = args[0]
      // # button labels
    }else {
        functions = args;
        buttonsLabels = ["Ok","Cancel"]
    }
    if(nativeDialogExists()){
      navigator.notification.confirm(
      message, // the message
      function( index ) {
        if(functions[index-1]) functions[index-1]()
      },
      message, // a title
      buttonsLabels    // text of the buttons
  );
    }else {
      var data = {
        message: message,
        buttons: buttonsLabels.map(function(val,key){
          return {
            label: val,
            cb: functions[key]
          }
        })
      }
      Meteor.popUp("confirmFallback",data);
    }  
  },
  alert: function(message){
    if(nativeDialogExists()){
      navigator.notification.alert(
          message,             // the message
          function() {},                      // a callback
          message, // a title
          "OK"                                // the button text
      );
    } else {
      Dialogs.confirm(message,["Ok"])
    }
  }
}



Template.confirmFallback.events({
  "click .btn": function(ev){
    if(this.cb){
      this.cb();
    }
    $(ev.target).trigger("popDown")
  }
})

function nativeDialogExists(){
  if(navigator && navigator.notification){
    return true;
  }else {
    return false;
  }
}

