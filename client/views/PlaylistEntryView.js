var PlaylistEntryView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template('<td><span class="fa fa-minus" id="remove">&nbsp;</span></td>' +
                       '<td><%= playlistName %><span class="fa fa-play" id="select">&nbsp;</span></td>'),

  events: {
    'click #remove': function() {
      this.model.remove();
    },
    'click #select': function() {
      this.model.select();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});
