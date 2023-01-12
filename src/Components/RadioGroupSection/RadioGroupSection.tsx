import React, { useState } from 'react'
import Radio from '@mui/material/Radio'
import { Box } from '@mui/material'

const classes = {
	radioWrapper: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	radioBtn: {},
}

const radioData = [
	{
		key: 0,
		value: 'disabled',
	},
	{
		key: 1,
		value: 'mine',
	},
	{
		key: 2,
		value: 'department',
	},
	{
		key: 3,
		value: 'allowed',
	},
]

const RadioGroupSection: React.FC<any> = ({ selectedType, disabled }) => {
	console.log(disabled)

	const [selectedValue, setSelectedValue] = useState(selectedType || 'disabled')

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedValue(event.target.value)
	}

	return (
		<Box sx={classes.radioWrapper}>
			{radioData.map(item => {
				return (
					<Radio
						key={item.key}
						checked={selectedValue === item.value}
						onChange={handleChange}
						disabled={item.value === disabled?.value}
						value={item.value}
						name="radio-buttons"
					/>
				)
			})}
		</Box>
	)
}

export default RadioGroupSection
