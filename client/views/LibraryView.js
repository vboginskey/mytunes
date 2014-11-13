// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({
  el: '<div class="library"><table></table></div>',

  initialize: function() {
    this.render();
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    // this.$el.children().detach();

    this.$el.find('table').html('<th colspan="3">Library</th>').append(
      this.collection.map(function(song){
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
