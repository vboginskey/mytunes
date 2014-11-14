var Playlist = Backbone.Model.extend({

  initialize: function(){
    this.set('songQueue', new SongQueue());
  },

  remove: function(){
    this.trigger('delete', this);
  },

  select: function(){
    this.trigger('select', this);
  }

});
