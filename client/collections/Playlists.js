var Playlists = Backbone.Collection.extend({

  model: Playlist,

  initialize: function(){
    this.on('delete', function(model){
      this.remove(model);
    });
  }

});
