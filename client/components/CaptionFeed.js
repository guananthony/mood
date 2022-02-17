import React, { useState, useEffect } from 'react';
import CaptionCard from './CaptionCard';
import { syncCaptions } from '../features/caption/captionSlice';
import { useSelector, useDispatch } from 'react-redux';

function CaptionFeed() {
	// const [captions, setCaptions] = useState([]);

	const captions = useSelector((state) => state.captions.captions);
	const moodFilter = useSelector((state) => state.captions.filter);
	const dispatch = useDispatch();

	useEffect(() => {
		console.log('in the useEffect hook');
		dispatch(syncCaptions());
	}, []);

	const captionList = captions
		.filter((caption) => {
			if (moodFilter) {
				return caption.mood.toLowerCase() === moodFilter;
			} else {
				return true;
			}
		})
		.map((caption) => {
			return (
				<CaptionCard
					key={caption._id}
					id={caption._id}
					mood={caption.mood}
					lyric={caption.lyric}
					annotations={caption.annotations}
					artist={caption.artist}
					shareUrl={caption.shareUrl}
				/>
			);
		});

	// if (moodFilter) {
	// 	const captionList = captions
	// 		.filter((caption) => caption.mood.toLowerCase() === moodFilter)
	// 		.map((caption) => {
	// 			return (
	// 				<CaptionCard
	// 					key={caption._id}
	// 					id={caption._id}
	// 					mood={caption.mood}
	// 					lyric={caption.lyric}
	// 					annotations={caption.annotations}
	// 					artist={caption.artist}
	// 					shareUrl={caption.shareUrl}
	// 				/>
	// 			);
	// 		});
	// }

	return <>{captionList}</>;
}

export default CaptionFeed;
