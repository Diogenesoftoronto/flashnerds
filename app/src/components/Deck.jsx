import { React, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

// props = title, image
const Deck = (props) => {
  const input = useRef(null);
  const [isEditMode, setEditMode] = useState(false);
  const [name, setName] = useState(props.name);

  const enableEditMode = () => {
    setEditMode(true);
    if (input.current) {
      input.current.value = name;
    }
  }

  const confirm = () => {
    const value = input.current?.value;
    if (value) {
      setName(value);
    }
    setEditMode(false);
  }
  
  const navigate = useNavigate();
  const goToPlayFlashcard = (id) => { 
    console.log(id);

    navigate(`/PlayFlashcard/${id}`);
  }

  return (
    <div className="deck" onClick={() => goToPlayFlashcard(props.id)}>
      <div className="deck-item">
        <img src={ props.image } alt={ props.name }/>
        { isEditMode 
          ? [
            <input ref={input} type="text" defaultValue={name} onChange={(e) => e.preventDefault()} />,
            <button onClick={confirm}>confirm</button>
          ]
          : <p onClick={ enableEditMode }>{ name }</p>
        }
      </div>
      <div className="button">
        <button onClick={(e) => { props.onDeleteBtnClick(props.id); e.stopPropagation();e.nativeEvnet.stopImmediatePropagation(); } }>X</button>
      </div>
    </div>
  )
}

export default Deck;