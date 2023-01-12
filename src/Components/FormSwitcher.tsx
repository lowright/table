import React, {useState} from 'react';
import Box from '@mui/system/Box';
import AccessTable from './AccessTable/AccessTable';
import Switch from '@mui/material/Switch';

const customTableTitles = ['CRM', 'Компанія та люди', 'Завдання', 'Стрічка новин']
const expertTableTitles = ['Ліди', 'Контакти', 'Компанії', 'Угоди', 'Рахунки', 'Товари', 'Активності']

const FormSwitcher = () => {

    const [checked, setChecked] = useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return (
        <Box>
            <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            {
                checked
                ? <AccessTable titles={customTableTitles}/>
                : <AccessTable titles={expertTableTitles}/>
            }
        </Box>
    )
}

export default FormSwitcher