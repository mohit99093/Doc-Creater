import React, { useState } from "react";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { toast } from "react-toastify";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Button, Form } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import Axios from "axios";
import getdate from "./usefulfn"
const Create = () => {
  const [title, setTitle] = useState("");
  const success = () =>
    toast.success("Created", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  const [editorState, seteditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    seteditorState(editorState);
  };
 
  const handlesave = async() => {
   
    let data = {
        title: title,
        lastupdated: getdate(),
        discription:    JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    }
    console.log(data)
    await Axios.post('/add',data).then(()=>console.log("success for creating")).
    catch((err)=>console.log(err))


    success();
  };



  return (
    <div>
      <Form.Label className="h2 mt-2">Title</Form.Label>
      <Form.Group className="mt-2 mb-4">
        <Form.Control
          size="lg"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Enter Title..."
        />
      </Form.Group>
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
      />
      <Button onClick={handlesave}>Create</Button>
    </div>
  );
};

export default Create;
