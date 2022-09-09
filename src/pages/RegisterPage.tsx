import React from 'react';
import { RegisterForm } from '../components/forms/RegisterForm';
import { Page } from '../utils/styles';

export function AuthenticationPage() {
    return (
        <Page>
            <RegisterForm />
        </Page>
    );
}
