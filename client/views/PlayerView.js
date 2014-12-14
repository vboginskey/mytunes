// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<div class="player"><audio controls autoplay /></div>',

  events: {
    'ended': function() {
      this.model.ended();
    }
  },

  initialize: function() {
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.find('audio').attr('src', this.model ? this.model.get('url') : '');
  }

});
