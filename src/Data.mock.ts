interface IDAta {
	id: number
	name: string
	userList: any[]
	departmentList: any[]
	permissions: any
}

export const TABLE_DATA: IDAta = {
	id: 1,
	name: 'OWNER',
	userList: [
		{
			id: 1,
			firstName: 'Root',
			lastName: 'Root',
			avatar: 'bb/53/bb5351630aa2912280fee44c039418bc.jpeg',
			position: 'Root',
			dateUpdate: 1672675735,
		},
		{
			id: 104,
			firstName: 'Богдан',
			lastName: 'Непочатов',
			avatar: '0f/c2/0fc2b3ebdcdd3abe7e9d3024d2db9e6f.png',
			position: 'Employee',
			dateUpdate: 1672675735,
		},
	],
	departmentList: [],
	permissions: {
		create: [
			'crm.company.create.mine',
			'crm.lead.create.department.disabled-any',
		],
		view: [],
		edit: ['crm.lead.edit.mine.disabled-any'],
		delete: [],
	},
}
