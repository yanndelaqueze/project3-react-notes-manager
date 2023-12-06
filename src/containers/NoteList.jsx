import { TextCard } from "components/TextCard/TextCard";
import s from "./style.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function NoteList(props) {
  const navigate = useNavigate();
  const noteList = useSelector((store) => store.NOTE.noteList);

  return (
    <div className="row justify-content-center">
      {noteList.map((note) => {
        return (
          <div className={s.card_container}>
            <TextCard
              title={note.title}
              subtitle={note.subtitle}
              content={note.content}
              onClick={() => navigate("/note/" + note.id)}
              onClickTrash={console.log("trash")}
            />
          </div>
        );
      })}
    </div>
  );
}
