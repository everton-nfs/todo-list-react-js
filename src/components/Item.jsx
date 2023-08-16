/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars

import { MdModeEdit, MdDelete} from "react-icons/md";

export function Item(props) {


  const handleDelete = () => {
    const updatedItems = props.items.filter((item) => item.id !== props.id);
    props.setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };

  return (
    <div className="bg-[#382952ff] mb-2 flex flex-row h-14">
      <div className="flex justify-start items-center pl-4 basis-[93%] overflow-hidden">
        <h1 className="overflow-hidden whitespace-nowrap text-ellipsis text-white">{props.title}</h1>
      </div>

     
   
      <div className="flex items-center gap-2 text-white cursor-pointer text-lg basis-[7%] p-3">
        <button onClick={() => alert("Vai editar!")}>
          <MdModeEdit/>
        </button>
        <button onClick={handleDelete}>
          <MdDelete/>
        </button>
      </div>
    </div>
  )
}