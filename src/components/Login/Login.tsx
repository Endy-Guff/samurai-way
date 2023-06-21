import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export const Login = () => {

    const onSubmit = (data: FormDataType) =>{
        console.log(data)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm = (props: InjectedFormProps<FormDataType>) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <Field type="text" placeholder={'Login'} name={'login'} component={'input'}/>
            <Field type="text" placeholder={'Password'} name={'password'} component={'input'}/>
            <span><Field type="checkbox" name={'rememberMe'} component={'input'}/>remember me</span>
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)
