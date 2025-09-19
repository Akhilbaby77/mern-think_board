import "./Note.css";
import { TiEdit } from "react-icons/ti";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router";


const Note = ({id, title, content, createdAt, onDelete }) => {
  const date = new Date(createdAt).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });


  return (
    
  <div className="note-box">

    <div className="title-div">
       <h4 className="title">{title}</h4>
    </div>

    <div className="content">
     <p>{content}</p>
    </div>

    <div className="note-footer">
      <span className="createdAt">{date}</span>
        <div className="btn-del-edt">
          
          <button className="edit"><Link className="edit" to={`/note/${id}`} ><TiEdit style={{ padding: "5px" }} /></Link>
            
          </button>
          <button onClick={() => onDelete(id)} className = "trash">
            <FaRegTrashAlt style={{ padding: "5px" }} />
          </button>
        </div>
      </div>
    </div>

  );
};

export default Note;
