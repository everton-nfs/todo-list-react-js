import { useEffect, useRef, useState } from "react";
import { Item } from "../components/Item";
import { TbPlus} from "react-icons/tb";

export function Home() {

  const [items, setItems] = useState([]);
  const [inputTitle, setInputTitle] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    const storedItems = localStorage.getItem('items');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  const handleAdd = () => {
    const newItem = {
      id: Date.now(),
      title: inputTitle,
      checked: false
    };

    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
    setInputTitle("");
    inputRef.current.focus();
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAdd();
    }
  };

  //console.log(JSON.stringify(items, null, '\t'));

  return (
    <div className="bg-[#762b94] h-screen">
      <div className="mx-auto max-w-screen-md xl:max-w-screen-xs p-5">
        <h1 className="uppercase text-white py-5 text-2xl">Todo List</h1>

        <div className="flex justify-center items-center mb-7">

        <input 
          autoFocus
          type="text"
          onChange={(e) => setInputTitle(e.target.value)}
          value={inputTitle}
          placeholder="Digite sua tarefa!"
          onKeyDown={inputTitle.length > 0 && handleKeyPress}
          ref={inputRef}
          className={`w-full px-4 py-2 text-black bg-gray-25 border border-gray-25 focus:border-white focus:outline-none placeholder:text-gray-30 text-base`}
        />

        <button 
          onClick={inputTitle.length > 0 && handleAdd}
          className="text-white bg-[#8847a3] h-[2.625rem] flex justify-center items-center w-11 text-lg"
        >
          <TbPlus/>
        </button>
      
      </div>
        {items.map((item) => (
          <Item 
            key={item.id} 
            id={item.id} 
            title={item.title}
            checked={item.checked}
            items={items}
            setItems={setItems}
          />
        ))}

      </div>

    </div>
  )
}