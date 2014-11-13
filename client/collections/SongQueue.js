// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function(){
      this.remove(this.at(0));
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(model){
      this.remove(model);
    });

    this.on('change:voteCount', function(){
      this.sort();
    });
  },

  playFirst: function(){
    var firstSong = this.at(0);
    firstSong.set('playCount', firstSong.get('playCount') + 1);
    firstSong.play();
  }

});
