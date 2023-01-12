import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Key } from 'react'

const classes = {
	tableHeader: {
		color: '#fff',
		display: 'flex',
		boxShadow: '0px 2px 10px rgba(58, 53, 65, 0.1)',
	},
	divider: {
		width: '20%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	tableContentCell: {
		width: '60%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	tableHeaderTitle: {
		fontFamily: 'Inter',
		fontWeight: 600,
		fontSize: '14px',
		lineHeight: '1.714em',
		letterSpacing: '0.15px',
		color: 'rgba(58, 53, 65, 0.87)',
		padding: '12px',
		textAlign: 'center',
		width: '20%',
		position: 'relative',
		'&:before': {
			content: '""',
			position: 'absolute',
			right: 0,
			top: '50%',
			transform: 'translateY(-50%)',
			width: '1px',
			height: '1em',
			backgroundColor: 'rgba(58, 53, 65, 0.12)',
		},
		// '&:first-child': {
		// 	padding: '12px 12px 12px 0',
		// },
		'&:last-child': {
			padding: '12px 0 12px 12px',
			border: 'none',
		},
	},
}

const TableHeader: React.FC<any> = ({ data }) => {
	return (
		<Box sx={classes.tableHeader}>
			<Box sx={classes.divider}></Box>
			<Box sx={classes.tableContentCell}>
				{data.map((item: any) => (
					<Typography key={item.id} sx={classes.tableHeaderTitle}>
						{item.name || ''}
					</Typography>
				))}
			</Box>
			<Box sx={classes.divider}></Box>
		</Box>
	)
}

export default TableHeader
