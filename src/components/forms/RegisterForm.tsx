/* eslint-disable css-modules/no-undef-class */
import React from 'react';
import {
    Button, InputContainer, InputField, InputLabel,
} from '../../utils/styles';
import styles from './index.module.scss';

export function RegisterForm() {
    return (
        <form className={styles.form}>
            <InputContainer>
                <InputLabel htmlFor="email">Email</InputLabel>
                <InputField type="text" id="email" />
            </InputContainer>
            <section className={styles.nameFiledRow}>
                <InputContainer>
                    <InputLabel htmlFor="firstName">First Name</InputLabel>
                    <InputField type="text" id="firstName" />
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="lastName">Last Name</InputLabel>
                    <InputField type="text" id="lastName" />
                </InputContainer>
            </section>
            <InputContainer>
                <InputLabel htmlFor="password">Password</InputLabel>
                <InputField type="password" id="password" />
            </InputContainer>
            <Button className={styles.button}>Create my account</Button>
        </form>
    );
}
