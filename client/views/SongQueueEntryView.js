// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td><span class="fa fa-minus" id="remove"></span></td>' +
                        '<td><%= artist %> - <%= title %></td>' +
                        '<td><span class="fa fa-thumbs-o-up" id="upvote">&nbsp;</span>' +
                        '<span class="fa fa-thumbs-o-down" id="downvote">&nbsp;&nbsp;</span>' +
                        '<%= voteCount %></td>'
                        ),

  // your code here!
  events: {
    'click #remove': function(){
      this.model.dequeue();
    },
    'click #upvote': function(){
      this.model.upvote();
    },
    'click #downvote': function(){
      this.model.downvote();
    }
  },

  initialize: function() {
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
