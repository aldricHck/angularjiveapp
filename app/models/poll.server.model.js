'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    validate = require('mongoose-validator'),
	Schema = mongoose.Schema;

/**
 * Poll Schema
 */

var nameValidator = [
    validate({
        validator: 'isLength',
        arguments: [1, 40],
        message: 'Name should be between 1 and 40 characters'
    })
];



var PollSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Poll name',
		trim: true,
        validate: nameValidator
	},
    id: {
        type: Number,
        required: 'Please fill poll number'
    },
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
    debateId: {
        type: Number,
        required: 'Please fill Debate number'
    },
    url: {
        type: String,
        default: '',
        trim: true
    },
    urlThumbnail: {
        type: String,
        default: '',
        trim: true
    }
});

mongoose.model('Poll', PollSchema);
