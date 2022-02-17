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
					<Toolbar>
						<IconButton
							size='large'
							edge='start'
							color='inherit'
							aria-label='menu'
							sx={{ mr: 2 }}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
							mood
						</Typography>
						<Button color='inherit'>login</Button>
					</Toolbar>
				</AppBar>
			</Box>
			<Box sx={{ width: 1 }} display='flex' justifyContent='center'>
				<ButtonGroup color='primary'>
					<Button>In My Feelings</Button>
					<Button>On The Grind</Button>
					<Button>Lost In Thought</Button>
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
