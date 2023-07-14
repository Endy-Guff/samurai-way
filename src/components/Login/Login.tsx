import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../FormsControl/FormsControl";
import {required} from "../../utils/validators";
import {loginTC} from "../../redux/authReducer";
import {AppDispatchType, StoreType} from "../../redux/reduxStore";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import stylesFormsControl from '../FormsControl/FormsControl.module.css'

const Login = (props: MapDispatchToPropsType&MapStateToPropsType) => {
    const navigate = useNavigate()
    const onSubmit = (data: FormDataType) =>{
        props.login(data)
    }

    if (props.isAuth) navigate('/profile')

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    );
};

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
    captcha: string
}
const LoginForm = (props:{captchaUrl:string|null}&InjectedFormProps<FormDataType,{captchaUrl:string|null}>) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <Field type="text" placeholder={'Login'} name={'login'} validate={[required]} component={Input}/>
            <Field type="password" placeholder={'Password'} name={'password'} validate={[required]} component={Input}/>
            <span><Field type="checkbox" name={'rememberMe'} component={'input'}/>remember me</span>
            {props.error&&<div>{props.error}</div>}
            {props.captchaUrl&& <img src={props.captchaUrl} alt=""/>}
            {props.captchaUrl&& <Field type="captcha" placeholder={'captcha'} name={'captcha'} validate={[required]} component={Input}/>}
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType, {captchaUrl: string|null}>({form: 'login'})(LoginForm)

type MapStateToPropsType = {
    captchaUrl: string|null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    login: ({login, password, rememberMe, captcha}: FormDataType)=>void
}
const MapStateToProps = (state: StoreType): MapStateToPropsType =>{
    return{
        captchaUrl: state.auth.captchaUrl,
        isAuth: state.auth.isAuth
    }
}
const MapDispatchToProps = (dispatch: AppDispatchType): MapDispatchToPropsType =>{
    return{
        login: ({login, password, rememberMe, captcha}: FormDataType)=>{
            dispatch(loginTC(login, password, rememberMe, captcha))
    }
}
}

export default connect(MapStateToProps, MapDispatchToProps)(Login)