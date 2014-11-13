var PlaylistView = Backbone.View.extend({

  attributes: {
    class: 'playlist'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html('<span>Playlists</span>')
  }

});
