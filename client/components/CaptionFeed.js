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
				key={caption._id}
				mood={caption.mood}
				lyric={caption.lyric}
				annotations={caption.annotations}
				artist={caption.artist}
				xs={{ my: 2 }}
			/>
		);
	});

	return <>{captionList}</>;
}

export default CaptionFeed;
