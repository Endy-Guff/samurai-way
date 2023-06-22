import React from 'react';
import {WrappedFieldProps} from "redux-form/lib/Field";
import s from './FormsControl.module.css'

type PropsType = {
    placeholder: string
    className: string
}

export const Textarea: React.FC<WrappedFieldProps&PropsType> = (
    {
        className,
        placeholder,
        input,
        meta,
        ...props
    }
) => {
    return (
        <div className={s.textareaControl}>
            <textarea className={className} {...input} {...props}/>
            {meta.error&&meta.touched&&<span className={s.error}>
                {meta.error}
            </span>}
        </div>
    );
};

export const Input: React.FC<WrappedFieldProps&PropsType> = (
    {
        placeholder,
        input,
        meta,
        ...props
    }
) => {
    return (
        <div className={s.inputControl}>
            <input {...input} {...props}/>
            {meta.error&&meta.touched&&<span className={s.error}>
                {meta.error}
            </span>}
        </div>
    );
};

