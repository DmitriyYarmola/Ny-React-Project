import React from "react";
import { reduxForm, InjectedFormProps } from "redux-form";
import "./message-form.sass";
import { createField } from "../../common/FormsControls/FormsControls";
import {
  requiredMidle,  
  minLengthCreator,
} from "../../untils/validators/validators";
import { FormMessagesDataType, FormMessagesDataKeysType } from "../../dialogs/Dialogs";

const minLength1 = minLengthCreator(1);

const MessageForm:React.FC<InjectedFormProps<FormMessagesDataType>> = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit} className="message-form">
      <div className="message-form_layout">
        {createField<FormMessagesDataKeysType>(
          [requiredMidle, minLength1],
          "message-form_input",
          "Input your message",
          "text",
          "message",
          null,
          false
        )}
        <button className="message-form_button">Add Message</button>
      </div>
    </form>
  );
};

export const MessageReduxForm = reduxForm<FormMessagesDataType>({
  form: "message",
})(MessageForm);

