import React, { useState } from "react";
import Preloader from "../../../../../common/preloader/Preloader";
import { Typography } from "@material-ui/core";
import { StatusReduxForm } from "./status/statusHooks";
import './profileData.sass'
import { ProfileType } from "../../../../../../redux/types/profile";


type PropsType = {
  profile: ProfileType | null
  isOwner: boolean
  updateUserStatus: (status: string) => void
  status: string
}

type ContactType = {
  name: string
  link: string
}

export type StatusFormDataType = {
  status: string
}

export type StatusFormDataKeysType = keyof StatusFormDataType

export const ProfileData: React.FC<PropsType> = ({ profile, isOwner, updateUserStatus, status }) => {
  let [editMode, setEditMode] = useState(false);
  let contactsArray = [] as Array<ContactType>
  let contactsList;
  let lookingJob;
  let jobDescription;

  if (profile) {
    let { aboutMe, lookingForAJob, lookingForAJobDescription, contacts } = profile;
    if (aboutMe) var description = aboutMe;
    else description = "Here is`t description";

    if (lookingForAJob) lookingJob = "Yes";
    else lookingJob = "No";

    if (lookingForAJobDescription) jobDescription = lookingForAJobDescription;
    else jobDescription = "Here is`t description";


    for (let item in contacts) {
      //@ts-ignore
      if (contacts[item]) contactsArray.push({ name: item, link: contacts[item] })
    }

    contactsList = contactsArray.map(item => {
      return (
        <a className="profile-contacts" key={item.name} href={item.link} target="_blank">

          <i className={`fab fa-${item.name} font-icon`}></i>

          {/* <FontAwesomeIcon className="font-icon" icon={['fab', `${item.name}`]} /> */}
        </a>
      )
    })
    console.log(contactsArray)

  } else return <Preloader />;

  //For status
  let initialStatus = {
    status: status,
  };

  const onSubmitStatus = (formData: StatusFormDataType) => {
    updateUserStatus(formData.status);
    setEditMode(false);
  };

  const activetedMode = () => {
    setEditMode(true);
  };

  const deActivetedEMode = () => {
    setEditMode(false);
  };
  //The end for status

  return (
    <div className="profile-information">
      <Typography variant="h2" className="profile-nameUser profile-item">
        {profile.fullName}
      </Typography>
      <div className="profile-status profile-item">
        <StatusReduxForm
          status={status}
          initialValues={initialStatus}
          onSubmit={onSubmitStatus}
          activetedMode={activetedMode}
          deActivetedEMode={deActivetedEMode}
          editMode={editMode}
          isOwner={isOwner}
        />
      </div>
      <div className="profile-aboutMe profile-item">
        <span>About me: </span> {description}
      </div>
      <div className="profile-lookingForAJob profile-item"><span>looking Job:</span> {lookingJob}</div>
      {profile.lookingForAJob && (
        <div className="profile-lookingForAJob profile-item">
          <span>Job Description:</span> {jobDescription}
        </div>
      )}
      <div className="profile-lookingForAJob profile-item">
        <span>My contacts: </span> {contactsList}
      </div>
    </div>
  );
};
