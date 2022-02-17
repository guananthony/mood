import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ButtonGroup } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setFilter } from '../features/caption/captionSlice';

function Header() {
	const dispatch = useDispatch();

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar
					position='static'
					style={{ backgroundColor: '#bdbdbd', color: 'black' }}
				>
					<Typography variant='h1' sx={{ flexGrow: 1 }} textAlign='center'>
						mood
					</Typography>
					<Typography variant='h6' textAlign='center'>
						the perfect ig caption from your favorite rapper
					</Typography>
				</AppBar>
			</Box>
			<Box sx={{ flexGrow: 1, my: 2 }} display='flex' justifyContent='center'>
				<ButtonGroup>
					<Button
						style={{
							backgroundColor: '#ef9a9a',
							color: 'white',
							border: '#ef9a9a',
						}}
						onClick={(e) => dispatch(setFilter('in my feelings'))}
					>
						In My Feelings
					</Button>
					<Button
						style={{
							backgroundColor: '#7986cb',
							color: 'white',
							border: '#7986cb',
						}}
						onClick={(e) => dispatch(setFilter('on the grind'))}
					>
						On The Grind
					</Button>
					<Button
						style={{
							backgroundColor: '#90caf9',
							color: 'white',
							border: '#90caf9',
						}}
						onClick={(e) => dispatch(setFilter('lost in thought'))}
					>
						Lost In Thought
					</Button>
					<Button
						style={{
							backgroundColor: '#80cbc4',
							color: 'white',
							border: '#80cbc4',
						}}
						onClick={(e) => dispatch(setFilter('feeling myself'))}
					>
						Feeling Myself
					</Button>
					<Button
						style={{
							backgroundColor: '#a1887f',
							color: 'white',
							border: '#a1887f',
						}}
						onClick={(e) => dispatch(setFilter('keeping it real'))}
					>
						Keeping It Real
					</Button>
				</ButtonGroup>
				{/* <ButtonGroup sx={{ width: '50%' }}>
					<Button>J. Cole</Button>
					<Button>SZA</Button>
					<Button>Drake</Button>
					<Button>Rihanna</Button>
					<Button>Kendrick Lamar</Button>
				</ButtonGroup> */}
			</Box>
		</>
	);
}

export default Header;
