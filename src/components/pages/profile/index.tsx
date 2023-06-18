import React from "react";
import AuthForm from 'Src/forms/auth-form'

import styles from './styles.module.css'

const Profile = () => {
    return (
        <div className={styles.profile}>
            Profile page
            <AuthForm />
        </div>
    );
}

export default Profile;