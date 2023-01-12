/* eslint-disable array-callback-return */
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TableBody from '../TableBody/TableBody'
import TableHeader from '../TableHeader/TableHeader'
import { TABLE_DATA } from '../../Data.mock'

interface IProps {
	titles: string[]
}

const data = TABLE_DATA.permissions

const getActionByCategories = ({ category }: any) => {
	let itemDefaultPermissions: any = {
		categoryKeyName: '',
		permissions: {
			create: {
				isDisabled: false,
				value: '',
			},
			edit: {
				isDisabled: false,
				value: '',
			},
			view: {
				isDisabled: false,
				value: '',
			},
			delete: {
				isDisabled: false,
				value: '',
			},
		},
	}
	const keys = Object.keys(data)

	keys.forEach((item: any) => {
		itemDefaultPermissions.categoryKeyName = category
		switch (item) {
			case 'create':
				itemDefaultPermissions.permissions.create = findPermissionsForCategory({
					categoryName: category,
					categoryActions: 'create',
				})
				break
			case 'view':
				itemDefaultPermissions.permissions.view = findPermissionsForCategory({
					categoryName: category,
					categoryActions: 'view',
				})
				break
			case 'edit':
				itemDefaultPermissions.permissions.edit = findPermissionsForCategory({
					categoryName: category,
					categoryActions: 'edit',
				})
				break
			case 'delete':
				itemDefaultPermissions.permissions.delete = findPermissionsForCategory({
					categoryName: category,
					categoryActions: 'delete',
				})
				break
			default:
				itemDefaultPermissions.permissions.create.value = 'disabled'
				itemDefaultPermissions.permissions.view.value = 'disabled'
				itemDefaultPermissions.permissions.edit.value = 'disabled'
				itemDefaultPermissions.permissions.delete.value = 'disabled'
				break
		}
	})

	return itemDefaultPermissions
}

const findPermissionsForCategory = ({
	categoryName,
	categoryActions,
}: any): string => {
	const keys = Object.keys(data).filter(key => key === categoryActions)
	let currPermission: any = {
		disabled: false,
		value: '',
	}
	keys.forEach(key => {
		const currentPermissions = data[key].filter((item: any) => {
			if (item.split('.')[1] === categoryName) {
				return item
			}
		})

		if (currentPermissions[0]?.split('.').pop() === 'disabled-any') {
			currPermission.disabled = {
				key: 'disabled-any',
				value: currentPermissions[0]?.split('.').slice(-2)[0],
			}
		} else {
			currPermission.value =
				currentPermissions[0]?.split('.').pop() || 'disabled'
		}
	})

	return currPermission
}

const tableDefaultItemList = [
	{
		id: '1',
		name: 'lead',
	},
	{
		id: '2',
		name: 'contact',
	},
	{
		id: '3',
		name: 'company',
	},
	{
		id: '4',
		name: 'invoice',
	},
	{
		id: '5',
		name: 'deal',
	},
	{
		id: '6',
		name: 'structure',
	},
]

const AccessTable: React.FC<IProps> = props => {
	const headerTableList = [
		{
			id: '1',
			name: 'create',
		},
		{
			id: '2',
			name: 'view',
		},
		{
			id: '3',
			name: 'edit',
		},
		{
			id: '4',
			name: 'delete',
		},
	]

	const handleClick = (e: any) => {
		alert('sraka')
	}

	return (
		<>
			<TableHeader data={headerTableList} />
			{tableDefaultItemList.map((item: any) => (
				<TableBody
					key={item.id}
					categoryName={item.name}
					permissions={
						getActionByCategories({ category: item.name }).permissions
					}
				/>
			))}
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<Button variant="contained" disabled onClick={handleClick}>
					Скасувати
				</Button>
				<Button variant="contained" onClick={handleClick}>
					Зберегти
				</Button>
			</Box>
		</>
	)
}

export default AccessTable
