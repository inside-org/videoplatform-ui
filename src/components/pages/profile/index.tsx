import React from "react";
import Layout from "Src/components/layout";
import AuthForm from 'Src/forms/auth-form'

import styles from './styles.module.css'

const Profile = () => {
    return (
        <Layout>
            <div className={styles.profile}>
                Profile page
                <AuthForm />
            </div>
        </Layout>
    );
}

export default Profile;