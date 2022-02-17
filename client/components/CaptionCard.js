import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Chip from '@mui/material/Chip';

const bull = (
	<Box
		component='span'
		sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
	>
		•
	</Box>
);

function handleDelete(id) {
	fetch(`/api/captions/${id}`, {
		method: 'DELETE',
	})
		.then((data) => console.log(data))
		.catch((e) => console.log(e));
}

const colorMoodDictionary = {
	'in my feelings': '#ef9a9a',
	'on the grind': '#7986cb',
	'lost in thought': '#90caf9',
	'feeling myself': '#80cbc4',
	'keeping it real': '#a1887f',
};

const card = (id, lyric, annotations, artist, mood, shareUrl) => (
	<React.Fragment>
		<CardContent>
			{/* <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
				ig caption
			</Typography> */}
			<Chip
				label={mood.toLowerCase()}
				style={{
					color: 'white',
					backgroundColor: colorMoodDictionary[mood.toLowerCase()],
				}}
			/>
			<Typography variant='h5' component='div'>
				{lyric}
			</Typography>
			<Typography variant='caption' sx={{ mb: 1.5 }} color='text.secondary'>
				{annotations[0]}
			</Typography>
			<Typography variant='subtitle1'>{artist}</Typography>
		</CardContent>
		<CardActions display='flex' style={{ justifyContent: 'center' }}>
			<Button href={shareUrl} target='_blank' size='small' variant='outlined'>
				Read More
			</Button>
			<IconButton onClick={() => handleDelete(id)}>
				<DeleteIcon />
			</IconButton>
		</CardActions>
	</React.Fragment>
);

function CaptionCard(props) {
	return (
		<Box sx={{ minWidth: 275, my: 2, mx: 1 }}>
			<Card variant='outlined'>
				{card(
					props.id,
					props.lyric,
					props.annotations,
					props.artist,
					props.mood,
					props.shareUrl
				)}
			</Card>
		</Box>
	);
}

export default CaptionCard;
