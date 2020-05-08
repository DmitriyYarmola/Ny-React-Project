import React from "react";
import {
  maxLengthCreator,
  minLengthCreator,
} from "../../../../../../untils/validators/validators";
import { reduxForm, InjectedFormProps } from "redux-form";
import { createField } from "../../../../../../common/FormsControls/FormsControls";
import { StatusFormDataType, StatusFormDataKeysType } from './../profileData'
import './status.sass'
const maxLength30 = maxLengthCreator(30);
const minLength = minLengthCreator(1);

type PropsType = {
  deActivetedEMode: () => void
  activetedMode: () => void
  onSubmit: (formData: any) => void
  editMode: boolean
  isOwner: boolean | React.MouseEvent<HTMLElement>
  status: string
}

const StatusHooks: React.FC<PropsType & InjectedFormProps<StatusFormDataType, PropsType>> = ({ handleSubmit, deActivetedEMode, activetedMode, editMode, isOwner, status, ...props }) => {
  return (
    <div>
      {!editMode ? (
        <div className="">
          <i onDoubleClick={isOwner ? activetedMode : undefined}>
            {status || "No status"}
          </i>
        </div>
      ) : (
          <div className="profile-form_input">
            <form onSubmit={handleSubmit}>
              {createField<StatusFormDataKeysType>(
                [maxLength30, minLength],
                "profile-form_input-status",
                "Your status",
                "text",
                "status",
                null,
                false
              )}
            </form>
          </div>
        )}
    </div>
  );
};


export const StatusReduxForm = reduxForm<StatusFormDataType, PropsType>({
  form: "Editstatus"
})(StatusHooks)
