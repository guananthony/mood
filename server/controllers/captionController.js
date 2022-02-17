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
		.catch((e) => {
			return next({
				log: 'captionController.getCaptions middleware error: check log for more details',
				status: 400,
				message: {
					err: `${e}`,
				},
			});
		});
};

// FETCHES info from API, then adds to database
captionController.addCaption = async (req, res, next) => {
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
		// destructure the response
		const lyric = data.data.response.referent.fragment;
		// filter through annotations and grab only text ones
		const annotations = data.data.response.annotation.body.dom.children
			.filter(
				(el) =>
					el.hasOwnProperty('children') && typeof el.children[0] === 'string'
			)
			.map((el) => el.children[0]);
		const shareUrl = data.data.response.annotation.share_url;
		const songTitle = data.data.response.referent.annotatable.title;
		const artist = data.data.response.referent.annotatable.context;

		res.locals.newCaption = await Caption.create({
			annotationId,
			mood,
			lyric,
			annotations,
			shareUrl,
			songTitle,
			artist,
		});
		return next();
	} catch (e) {
		console.log(e);
		return next();
	}
};

captionController.deleteCaption = (req, res, next) => {
	const { id } = req.params;
	console.log(id);

	Caption.deleteOne({ _id: id })
		.then(() => {
			console.log('Data deleted');
		})
		.catch((e) => {
			return next({
				log: 'captionController.deleteCaption middleware error: check log for more details',
				status: 400,
				message: {
					err: `${e}`,
				},
			});
		});
};

module.exports = captionController;
