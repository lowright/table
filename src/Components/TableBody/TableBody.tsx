// @ts-ignore
// eslint-disable-next-line @typescript-eslint/ban-ts-comment

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import RadioGroupSection from '../RadioGroupSection/RadioGroupSection'
import { TABLE_DATA } from '../../Data.mock'

interface IProps {
	title?: string
}
const accessTitles = ['Заборонено', 'Свої', 'Свого відділу', 'Дозволено']

interface IFilterTableItem {
	itemName: string
}

const defaultPermission: string[] = [
	'disabled',
	'mine',
	'department',
	'allowed',
]

const TableBody: React.FC<any> = ({ categoryName = '', permissions = {} }) => {
	console.log(permissions)

	return (
		<Box sx={classes.tableSection}>
			<Box sx={classes.divider}>
				<Typography sx={classes.categoryTitle}>
					{categoryName || 'TEST'}
				</Typography>
			</Box>
			<Box sx={classes.tableContentCell}>
				<RadioGroupSection
					disabled={permissions.create.disabled}
					selectedType={permissions.create.value}
				/>
				<RadioGroupSection
					disabled={permissions.view.disabled}
					selectedType={permissions.view.value}
				/>
				<RadioGroupSection
					disabled={permissions.edit.disabled}
					selectedType={permissions.edit.value}
				/>
				<RadioGroupSection
					disabled={permissions.delete.disabled}
					selectedType={permissions.delete.value}
				/>
			</Box>
			<Box sx={classes.accessWrapper}>
				{accessTitles.map(item => (
					<Typography key={item} sx={classes.accessTitle}>
						{item}
					</Typography>
				))}
			</Box>
		</Box>
	)
}

const classes = {
	divider: {
		width: '20%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	tableContentCell: {
		width: '50%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	tableSection: {
		display: 'flex',
		justifyContent: 'space-between',
		borderBottom: '1px solid #ccc',
		marginBottom: '15px',
		paddingBottom: '15px',
	},
	categoryTitle: {
		fontFamily: 'Inter',
		fontWeight: 600,
		fontSize: '14px',
		lineHeight: '1.714em',
		letterSpacing: '0.15px',
		color: 'rgba(58, 53, 65, 0.87)',
	},
	accessWrapper: {
		width: '20%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	accessTitle: {
		fontFamily: 'Inter',
		fontWeight: 400,
		fontSize: '11px',
		lineHeight: '16px',
		letterSpacing: '0.4px',
		color: 'rgba(58, 53, 65, 0.87)',
	},
}
export default TableBody
