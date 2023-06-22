import React from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogsItem/DialogsItem";
import {MessagesItem} from "./MessagesItem/MessagesItem";
import {DialogsMapProps} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength30, maxLength50, required} from "../../utils/validators";
import {Textarea} from "../FormsControl/FormsControl";

export const Dialogs: React.FC<DialogsMapProps> = (
    {
        state,
        addMessage,
    }
) => {


    const dialogsElement = state.dialogsData.map(dialog => {
        return <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>
    })
    const messagesElement = state.messagesData.map(message => {
        return <MessagesItem message={message.text} key={message.id}/>
    })

    const addMessageHandler = (data: FormDataType) =>{
        addMessage(data.newMessageText)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messagesItems}>
                <div className={s.messagesItemsBox}>
                    {messagesElement}
                </div>
                <AddMessageReduxForm onSubmit={addMessageHandler}/>
            </div>
        </div>
    )
}

type FormDataType = {
    newMessageText: string
}

const AddMessageForm = (props: InjectedFormProps<FormDataType>) =>{
    return <form className={s.textareaBox} onSubmit={props.handleSubmit}>
                    <Field className={s.textarea}
                           component={Textarea}
                           name={'newMessageText'}
                           placeholder={'Tell something'}
                           validate={[required, maxLength50]}
                    />
        <button className={s.button}>add</button>
    </form>
}

const AddMessageReduxForm = reduxForm<FormDataType>({form: 'newMessage'})(AddMessageForm)