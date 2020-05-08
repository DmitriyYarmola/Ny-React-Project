import React from "react";
import { Field, reduxForm, InjectedFormProps, FormSubmitHandler } from "redux-form";
import "./post-form.sass";
import {
  required,
  maxLengthCreator,
  minLengthCreator,
} from "../../untils/validators/validators";
import { createField } from "../../common/FormsControls/FormsControls";
import { PostFormValuesType, PostFormValuesKeysType } from "../../profile/-posts/posts";

const maxLength30 = maxLengthCreator(30);
const maxLength1000 = maxLengthCreator(1000);
const minLength = minLengthCreator(5);



const PostForm:React.FC<InjectedFormProps<PostFormValuesType>>  = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="post-form">
      <div className="">
        {createField<PostFormValuesKeysType>([required, maxLength1000, minLength],
          "post-form_input-content",
          "Input your post",
          "text",
          "postMessageTitle",
          null,
          false
          )}
      </div>
      <button className="post-form_button" type="submit" >
        Add Post
      </button>
    </form>
  );
};

const PostReduxForm = reduxForm<PostFormValuesType>({
  form: "post",
})(PostForm);
export default PostReduxForm;
