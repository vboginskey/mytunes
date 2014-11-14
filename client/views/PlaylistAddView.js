var PlaylistAddView = Backbone.View.extend({

  el: '<tr><td><span class="fa fa-plus" id="add">&nbsp;</span></td>' +
      '<td>New Playlist</td></tr>',

  events: {
    'click #add': function(){
      this.acceptInput();
    }
  },

  acceptInput: function() {
    // var savedEl = this.$el.children().last().remove();
    var $inputCell = this.$el.children().last();
    $inputCell.empty();
    $inputCell.append('<td><input type="text" maxlength="15" value="New Playlist"></td>');
    var $inputField = this.$el.find('input');
    $inputField.select();
    $inputField.keypress(function(e) {
      if (e.which === 13) {
        this.addPlaylist($inputField.val());
        $inputField.remove();
        // this.$el.append(savedEl);
        $inputCell.text('New Playlist');
      }
    }.bind(this));

  },

  addPlaylist: function(name) {
    this.collection.add(new Playlist({playlistName: name}));
  }
});
