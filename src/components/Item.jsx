/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars

import { useState } from "react";
import { MdModeEdit, MdDelete, MdSave } from "react-icons/md";
import { BsCheckLg } from "react-icons/bs";

export function Item(props) {

  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [checked, setChecked] = useState(props.checked)

  const handleCheck = () => {
    const updatedItems = props.items.map((item) => {
      if (item.id === props.id) {
        return { ...item, checked: !checked };
      }
      return item;
    });

    props.setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));

    setChecked(!checked)
  };

  const handleSave = () => {
    const updatedItems = props.items.map((item) => {
      if (item.id === props.id) {
        return { ...item, title: title };
      }
      return item;
    });

    props.setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));

    setEdit(false);
  };

  const handleDelete = () => {
    const updatedItems = props.items.filter((item) => item.id !== props.id);
    props.setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <div className={`${checked ? "bg-[#30d89b]" : "bg-[#8847a3]"} mb-2 flex flex-row h-14`}>

      <div className="flex justify-center items-center basis-[8%] px-3">
        <button 
          onClick={handleCheck} 
          className={`${checked ? "text-[#30d89b] bg-white" : "bg-transparent"} rounded-full w-6 h-6 border-2 border-white flex justify-center items-center text-lg pr-[2px]`}>
          {checked ? <BsCheckLg/> : <></>}
        </button>
      </div>


      <div className="flex justify-start items-center basis-[82%] overflow-hidden">
        {
          edit ? (
            <input
              type="text"
              autoFocus
              className='w-full bg-transparent text-white focus:outline-none placeholder:text-gray-30'
              value={title}
              onKeyDown={handleKeyPress}
              onChange={(event) => setTitle(event.target.value)}
            />
          ) : (
            <h1
              onDoubleClick={() => setEdit(true)}
              className="overflow-hidden whitespace-nowrap text-ellipsis text-white cursor-text">
              {title}
            </h1>
          )
        }
      </div>

      <div className="flex items-center gap-4 text-white cursor-pointer text-lg basis-[10%] p-3">
        {
          edit ? (
            <button onClick={handleSave} className="h-full">
              <MdSave />
            </button>
          ) : (
            <button onClick={() => setEdit(true)} className="h-full">
              <MdModeEdit />
            </button>
          )
        }
        <button onClick={handleDelete} className="h-full">
          <MdDelete />
        </button>
      </div>
    </div>
  )
}