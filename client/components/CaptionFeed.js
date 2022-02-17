import React, { useState, useEffect } from 'react';
import CaptionCard from './CaptionCard';
import { syncCaptions } from '../features/caption/captionSlice';
import { useSelector, useDispatch } from 'react-redux';

function CaptionFeed() {
	// const [captions, setCaptions] = useState([]);

	const captions = useSelector((state) => state.captions.captions);
	const dispatch = useDispatch();

	useEffect(() => {
		console.log('in the useEffect hook');
		dispatch(syncCaptions());
	}, []);

	// useEffect(() => {
	// 	fetch('/api/captions', {
	// 		method: 'GET',
	// 	})
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setCaptions(data.reverse());
	// 			console.log(captions);
	// 		})
	// 		.catch((e) => console.log(e));
	// }, [captions.length]);

	const captionList = captions.map((caption) => {
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

	return <>{captionList}</>;
}

export default CaptionFeed;
