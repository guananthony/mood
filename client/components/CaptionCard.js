import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const bull = (
	<Box
		component='span'
		sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
	>
		•
	</Box>
);

const card = (lyric, annotations, artist, mood) => (
	<React.Fragment>
		<CardContent>
			<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
				ig caption
			</Typography>
			<Typography variant='h5' component='div'>
				{lyric}
			</Typography>
			<Typography variant='caption' sx={{ mb: 1.5 }} color='text.secondary'>
				{annotations[0]}
			</Typography>
			<Typography variant='subtitle1'>{artist}</Typography>
		</CardContent>
		<CardActions display='flex' style={{ justifyContent: 'center' }}>
			<Button variant='outlined' size='small'>
				{mood}
			</Button>
			<IconButton>
				<DeleteIcon />
			</IconButton>
		</CardActions>
	</React.Fragment>
);

function CaptionCard(props) {
	return (
		<Box sx={{ minWidth: 275 }}>
			<Card variant='outlined'>
				{card(props.lyric, props.annotations, props.artist, props.mood)}
			</Card>
		</Box>
	);
}

export default CaptionCard;
