// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({
  attributes: {
    class: 'container'
  },

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.playlistView = new PlaylistView({collection: this.model.get('playlists')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    this.model.on('change:songQueue', function(playlist){
      this.songQueueView.setPlaylist(playlist.get('songQueue'));
    }, this);
  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.playlistView.$el,
      this.libraryView.$el,
      this.songQueueView.$el
    ]);
  }

});
