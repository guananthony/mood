const mongoose = require('mongoose');

const MONGO_URI =
	'mongodb+srv://anthony:codesmith@cluster0.yo28x.mongodb.net/captions?retryWrites=true&w=majority';

mongoose
	.connect(MONGO_URI, {
		// options for connect method to parse URI
		useNewUrlParser: true,
		useUnifiedTopology: true,
		// // sets the name of the DB that our collections are part of
		dbName: 'captions',
	})
	.then(() => console.log('Connected to Mongo DB.'))
	.catch((err) => console.log(err));

const Schema = mongoose.Schema;

const captionSchema = new Schema({
	// lyric: { type: String, required: true },
	annotationId: { type: Number, required: true },
	// artist: { type: String, required: true },
	mood: { type: String, required: true },
	lyric: String,
	annotations: [String],
	shareUrl: String,
	songTitle: String,
	artist: String,
});

const Caption = mongoose.model('Caption', captionSchema);

module.exports = Caption;
