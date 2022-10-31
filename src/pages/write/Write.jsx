import { useContext, useState } from "react";
import "./write.css";
import { Context } from "../../context/Context";
import axios from "axios";


export default function Write() {
    const [title, setTitle] = useState("")
    const [desc, setdesc] = useState("")
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
          username: user.username,
          title,
          desc,
        };
        if (file) {
            const data =new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
              await axios.post("/upload", data);
            } catch (err) {}
          }
          try {
            const res = await axios.post("/posts", newPost);
            window.location.replace("/post/" + res.data._id);
          } catch (err) {}
     };

  return (
    <div className="write">
    {file && (
        <img className="writeImg" 
        src={URL.createObjectURL(file)} 
        alt="" />
      )}
      <div>
      <label className="writeCat">Categories:
            <select>
            <option value="selet ">--Select Categories--</option>
            <option value="Music">Music</option>
            <option value="Sports">Sports</option>
            <option value="Lifestyle">Lifestyle</option>
            </select>
            </label>
      </div>
        <form className="writeForm" onSubmit={handleSubmit}>
            <div className="writeFormGroup">
            <label htmlFor="fileInput">
                <i className="writeIcon fas fa-plus"></i>
            </label>
                <input type="file" 
                id="fileInput" 
                style={{display:"none"}} 
                onChange={(e) => setFile(e.target.files[0])}/>
                <input type="text" 
                placeholder="Title" 
                className="writeInput" 
                autoFocus={true}
                onChange={e=>setTitle(e.target.value)}
                 />
            </div>
            <div className="writeFormGroup">
                <textarea
                    placeholder="Tell your story here...."
                    type="text"
                    className="writeInput writeText"
                    onChange={e=>setdesc(e.target.value)}
                 ></textarea>   
            </div>
            <button className="writeSubmit" type="submit">Publish</button>
           
        </form>
    </div>
  )
}
