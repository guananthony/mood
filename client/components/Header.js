import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ButtonGroup } from '@mui/material';

function Header() {
	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position='static' style={{ backgroundColor: '#9e9e9e' }}>
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
					>
						In My Feelings
					</Button>
					<Button
						style={{
							backgroundColor: '#7986cb',
							color: 'white',
							border: '#7986cb',
						}}
					>
						On The Grind
					</Button>
					<Button
						style={{
							backgroundColor: '#90caf9',
							color: 'white',
							border: '#90caf9',
						}}
					>
						Lost In Thought
					</Button>
					<Button
						style={{
							backgroundColor: '#80cbc4',
							color: 'white',
							border: '#80cbc4',
						}}
					>
						Feeling Myself
					</Button>
					<Button
						style={{
							backgroundColor: '#a1887f',
							color: 'white',
							border: '#a1887f',
						}}
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
