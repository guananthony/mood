import React, { useState, useEffect } from 'react';
import CaptionCard from './CaptionCard';

function CaptionFeed() {
	const [captions, setCaptions] = useState([]);

	useEffect(() => {
		fetch('/api/captions', {
			method: 'GET',
		})
			.then((res) => res.json())
			.then((data) => {
				setCaptions(data);
				console.log(captions);
			})
			.catch((e) => console.log(e));
	}, [captions.length]);

	const captionList = captions.map((caption) => {
		return (
			<CaptionCard
				lyric={caption.lyric}
				key={caption._id}
				annotation={caption.annotations[0]}
			/>
		);
	});

	return <>{captionList}</>;
}

export default CaptionFeed;
