import React from "react";
import { createField } from "../../common/FormsControls/FormsControls";
import { Field, reduxForm, InjectedFormProps } from "redux-form";
import {
  maxLengthCreator,
  minLengthCreator,
} from "../../untils/validators/validators";
import { ProfileType } from "../../../redux/types/profile";
import { EditProfileFormDataType, ContactsProfileType } from "../../editProfile/EditProfileContainer";
import "./profile-form.sass"
const maxLength30 = maxLengthCreator(30);
const minLength = minLengthCreator(1);

type PropsType = {
  profile: ProfileType
}

const ProfileForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({ handleSubmit, profile, error }) => {
  console.log(profile)
  let contactsArray = [];
  let contactsList;
  let { contacts } = profile;
  for (let item in contacts) {
    //@ts-ignore
    if (contacts[item]) contactsArray.push(item);
  }

  contactsList = contactsArray.map((contact) => {
    return (
      <div key={contact} className={`profile-edit-form_contact-${contact}`} >
        <b>{contact}:</b>
        {createField<ContactsProfileType>(
            [maxLength30, minLength],
            `profile-edit-form_input-${contact}`,
            `contacts.${contact}`,
            "text",
            //@ts-ignore
            `contacts.${contact}`,
            null,
            false
          )}
      </div>
    );
  });

  return (
    <form onSubmit={handleSubmit} className="profile-edit-form">
      <div className="profile-edit-form_content">
        <div className="profile-edit-form_nameUser">
          <b>Your Name:</b>
          {createField<EditProfileFormDataType>(
            [maxLength30, minLength],
            "profile-edit-form_input-userName",
            "fullName",
            "text",
            "fullName",
            null,
            false
          )}
        </div>
        <b>About me: </b>
        {createField<EditProfileFormDataType>(
          [maxLength30, minLength],
          "profile-edit-form_input-about",
          "aboutMe",
          "text",
          "aboutMe",
          null,
          false
        )}
      </div>
      <div className="profile-edit-form_lookingForJob">
        <b>looking Job:</b>
        <Field
          validate={[maxLength30, minLength]}
          placeholder={undefined}
          name="lookingForAJob"
          component="input"
          type="checkbox"
          className="profile-edit-form_input-lookingJob"
          autoComplete="off"
        />

      </div>
      <div className="profile-edit-form_jobDescription">
        <b>Job Description:</b>
        {createField<EditProfileFormDataType>(
        [maxLength30, minLength],
        "profile-edit-form_input-jobDescription",
        "lookingForAJobDescription",
        "text",
        "lookingForAJobDescription",
        null,
        false
      )}
      </div>
      <div className="profile-edit-form_contacts">
        <b>My contacts</b> {contactsList}
      </div>
      {error && <div className="form-summary_error">{error}</div>}
      <button type="submit">Save</button>
    </form>
  );
};

const ProfileReduxForm = reduxForm<ProfileType, PropsType>({
  form: "profileEdit",
})(ProfileForm);

export default ProfileReduxForm;
