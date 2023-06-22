import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../FormsControl/FormsControl";
import {required} from "../../utils/validators";

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
            <Field type="text" placeholder={'Login'} name={'login'} validate={[required]} component={Input}/>
            <Field type="password" placeholder={'Password'} name={'password'} validate={[required]} component={Input}/>
            <span><Field type="checkbox" name={'rememberMe'} component={'input'}/>remember me</span>
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)
