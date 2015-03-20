gadgets.util.registerOnLoadHandler(function() {
  // add code that should run on page load here
    osapi.jive.corev3.people.getViewer().execute( function(viewerData) {
         console.log(viewerData);
    });
});
