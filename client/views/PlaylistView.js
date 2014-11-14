var PlaylistView = Backbone.View.extend({

  el: '<div class="playlist"><table></table></div>',

  initialize: function() {
    this.playlistAddView = new PlaylistAddView({collection: this.collection});
    this.render();

    this.collection.on('add remove', this.render, this);
  },

  render: function() {
    this.$el.children().children().detach();

    this.$el.find('table').html('<th colspan="2">Playlists</th>').append(
      this.collection.map(function(playlist) {
        return new PlaylistEntryView({model:playlist}).render();
      })
    ).append(this.playlistAddView.$el);
  }

});
