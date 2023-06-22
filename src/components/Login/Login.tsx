import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../FormsControl/FormsControl";
import {required} from "../../utils/validators";
import {loginTC} from "../../redux/authReducer";
import {AppDispatchType, StoreType} from "../../redux/reduxStore";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";

const Login = (props: MapDispatchToPropsType&MapStateToPropsType) => {
    const navigate = useNavigate()
    const onSubmit = (data: FormDataType) =>{
        props.login(data)
    }

    if (props.isAuth) navigate('/profile')

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

type MapStateToPropsType = {
    isAuth: boolean
}
type MapDispatchToPropsType = {
    login: ({login, password, rememberMe}: FormDataType)=>void
}
const MapStateToProps = (state: StoreType): MapStateToPropsType =>{
    return{
        isAuth: state.auth.isAuth
    }
}
const MapDispatchToProps = (dispatch: AppDispatchType): MapDispatchToPropsType =>{
    return{
        login: ({login, password, rememberMe}: FormDataType)=>{
            dispatch(loginTC(login, password, rememberMe))
    }
}
}

export default connect(MapStateToProps, MapDispatchToProps)(Login)