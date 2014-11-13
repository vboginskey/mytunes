// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  el: '<div class="queue"><table></table></div>',

  initialize: function() {
    console.log(this.$el);
    this.render();

    this.collection.on('add remove sort', function() {
      this.render();
    }, this);
  },

  render: function() {
    this.$el.find('table').html('<th colspan="3">Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
