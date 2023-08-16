import { useEffect, useState } from "react";
import { Item } from "../components/Item";

export function Home() {

  const [items, setItems] = useState([]);
  const [inputTitle, setInputTitle] = useState('');

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
    };

    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
    setInputTitle('');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAdd();
    }
  };

  //console.log(JSON.stringify(items, null, '\t'));

  return (
    <div className="bg-[#1e1530ff] h-screen">
      <div className="mx-auto max-w-screen-md xl:max-w-screen-xs">
        <h1 className="uppercase text-white py-5">Todo List</h1>

        <input 
          type="text"
          onChange={(e) => setInputTitle(e.target.value)}
          placeholder="Digite sua tarefa!"
          onKeyDown={handleKeyPress}
          className={`w-full px-4 py-[3px] text-black bg-gray-25 border border-gray-25 focus:border-white focus:outline-none placeholder:text-gray-30 text-base mb-2`}
        />

        <button 
          onClick={handleAdd}
        >
          Add String
        </button>
      
        {items.map((item) => (
          <Item 
            key={item.id} 
            id={item.id} 
            title={item.title}
            items={items}
            setItems={setItems}
          />
        ))}

      </div>

    </div>
  )
}