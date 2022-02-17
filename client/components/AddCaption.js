import React, { useState } from 'react';
import {
	Button,
	Box,
	TextField,
	FormControl,
	RadioGroup,
	FormLabel,
	FormControlLabel,
	Radio,
	Typography,
} from '@mui/material';
import { syncCaptions } from '../features/caption/captionSlice';
import { useSelector, useDispatch } from 'react-redux';

function AddCaption() {
	const [annotationId, setAnnotationId] = useState('');
	const [mood, setMood] = useState('');

	// REDUX TOOLKIT
	const dispatch = useDispatch();

	function handleTextFieldChange(e) {
		setAnnotationId(e.target.value);
	}

	function handleRadioGroupSelection(e) {
		setMood(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		fetch('/api/captions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				annotationId,
				mood,
			}),
		}).then((response) => {
			dispatch(syncCaptions());
		});
		setAnnotationId('');
		setMood('');
		console.log(annotationId, mood);
	}

	return (
		<>
			<FormControl onSubmit={(e) => handleSubmit(e)}>
				<Box
					component='form'
					sx={{
						'& .MuiTextField-root': { m: 1, width: '25ch' },
					}}
					noValidate
					autoComplete='off'
					display='flex'
					flexDirection='column'
					alignItems='center'
				>
					<Typography variant='h6'>add caption</Typography>
					<TextField
						required
						id='outlined-required'
						label='genius annotation id'
						onChange={handleTextFieldChange}
						value={annotationId}
						style={{ backgroundColor: '#eeeeee' }}
					/>
					{/* <TextField required id='outlined-required' label='mood' /> */}
					<FormLabel id='demo-row-radio-buttons-group-label'>
						select a mood: *
					</FormLabel>
					<RadioGroup
						aria-labelledby='demo-row-radio-buttons-group-label'
						name='row-radio-buttons-group'
						onChange={handleRadioGroupSelection}
						value={mood}
					>
						<FormControlLabel
							value='in my feelings'
							control={<Radio />}
							label='in my feelings'
						/>
						<FormControlLabel
							value='on the grind'
							control={<Radio />}
							label='on the grind'
						/>
						<FormControlLabel
							value='lost in thought'
							control={<Radio />}
							label='lost in thought'
						/>
						<FormControlLabel
							value='feeling myself'
							control={<Radio />}
							label='feeling myself'
						/>
						<FormControlLabel
							value='keeping it real'
							control={<Radio />}
							label='keeping it real'
						/>
					</RadioGroup>
					<Button type='submit' variant='contained'>
						add
					</Button>
				</Box>
			</FormControl>
		</>
	);
}

export default AddCaption;
