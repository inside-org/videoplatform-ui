import React, { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

import styles from './styles.module.css'

const AuthForm = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value);
    };

    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    return (
        <Box component="form" className={styles.auth}>
            <FormControl>
                <TextField
                    value={ login }
                    onChange={ handleChangeLogin }
                    id="input-login"
                    label="Логин"
                    variant="outlined"
                />
            </FormControl>
            <FormControl>
                <TextField
                    value={ password }
                    onChange={ handleChangePassword }
                    id="input-password"
                    label="Пароль"
                    variant="outlined"
                    type="password"
                />
            </FormControl>
        </Box>
    );
}

export default AuthForm;