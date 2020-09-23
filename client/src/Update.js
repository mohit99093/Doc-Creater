import React from "react";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { useHistory } from "react-router-dom"
import { Editor } from "react-draft-wysiwyg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Button, Form, Card } from "react-bootstrap";
import getdate from "./usefulfn"
import { useState, useEffect } from "react";
import Axios from "axios"
const Update = () => {
  const [title, setTitle] = useState("");
  const [id,setId] = useState("");
  const history = useHistory()
  const success = () =>
    toast.success("Updated", {
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

  useEffect(() => {
    getdata();
  }, []);

  const handlesave = async() => {
    let data = {
      title: title,
      lastupdated: getdate(),
      discription:    JSON.stringify(convertToRaw(editorState.getCurrentContent()))
  }
  // console.log(data)
    await Axios.post(`http://localhost:5000/update/${id}`,data)
    .then(()=>console.log("succes for update"))
    .catch((err)=>console.log(err))
    
    success();
  };

  const getdata = () => {
    const data = history.location.state
    console.log(data)
    setTitle(data.title)
    seteditorState(EditorState.createWithContent(convertFromRaw(JSON.parse(data.discription))));
    setId(data._id)
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
     
      <Button className="m-5 btn-md" onClick={handlesave}>Save</Button>
    </div>
  );
};

export default Update;
