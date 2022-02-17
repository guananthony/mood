// still need to set this up
const axios = require('axios');
const Caption = require('../models/captionModel');

const captionController = {};

// only gets info from database; no interaction with API
captionController.getCaptions = (req, res, next) => {
	Caption.find({})
		.then((captions) => {
			res.locals.captions = captions;
			return next();
		})
		.catch((err) => console.log(err));
};

// FETCHES info from API, then adds to database
captionController.addCaption = async (req, res, next) => {
	// const { annotationId, artist, mood } = req.body;
	const { annotationId, mood } = req.body;
	console.log(annotationId);
	// create an instance of axios
	const genius = axios.create({
		baseURL: 'https://api.genius.com/annotations/',
		headers: {
			Authorization: `Bearer 2xk4kfDcZmYzi8-id7C_msKmyPJb6MCctbo_MimmCADqqgEwCI70IvC5OixiDBZt`,
		},
	});
	try {
		// parameterize the query here by annotationId
		const data = await genius.get(`/${annotationId}`);
		// console.log(data.data.response);
		// console.log(data.data.response.referent.fragment);
		// console.log(data.data.response.annotation.body.dom.children[2].children[0]);
		// destructure the response
		const lyric = data.data.response.referent.fragment;
		// const annotations = [
		// 	data.data.response.annotation.body.dom.children[2].children[0],
		// ];
		const shareUrl = data.data.response.annotation.share_url;
		const songTitle = data.data.response.referent.annotatable.title;
		const artist = data.data.response.referent.annotatable.context;
		console.log('in the POST middleware');

		res.locals.newCaption = await Caption.create({
			annotationId,
			mood,
			lyric,
			// annotations,
			shareUrl,
			songTitle,
			artist,
		});
		return next();
	} catch (e) {
		console.log(e);
		return next();
	}

	// Caption.create({ annotationId, artist, mood })
	// 	.then((newCaption) => {
	// 		res.locals.newCaption = newCaption;
	// 		return next();
	// 	})
	// 	.catch((err) => console.log(err));
};

// captionController.deleteCaption = (req, res, next) => {};

module.exports = captionController;
