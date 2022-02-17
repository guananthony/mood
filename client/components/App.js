import React from 'react';
import Header from './Header';
import CaptionFeed from './CaptionFeed';
import AddCaption from './AddCaption';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

function App() {
	return (
		<React.Fragment>
			<Header />
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={2}>
					<Grid item xs={8}>
						<Item>
							<CaptionFeed />
						</Item>
					</Grid>
					<Grid item xs={4}>
						<Item>
							<AddCaption/>
						</Item>
					</Grid>
				</Grid>
			</Box>
		</React.Fragment>
	);
}

export default App;
