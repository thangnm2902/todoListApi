'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  name: {
    type: String,
    required: 'Enter the name of the user'
  },
  address: {
    type: String,
    required: 'Enter the address of the user'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['active', 'deactive', 'delete']
    }],
    default: ['active']
  }
});

module.exports = mongoose.model('Users', UserSchema);