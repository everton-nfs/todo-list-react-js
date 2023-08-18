import { useEffect, useRef, useState } from "react";
import { Item } from "../components/Item";
import { TbPlus } from "react-icons/tb";
import { BsCheckLg } from "react-icons/bs";
import { PiSignOutBold } from "react-icons/pi";
import { auth } from "../services/firebaseConfig";
import { useSignOut } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom";


export function Home() {

  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [signOut, loading, error] = useSignOut(auth);
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

  const handleSignOut = async () => {
    const success = await signOut();
    if (success) {
      return navigate("/");
    }
  }

  //console.log(JSON.stringify(items, null, '\t'));

  return (
    <div className="bg-[#762b94] h-full">
      <div className="mx-auto max-w-screen-md xl:max-w-screen-xs p-5 lg:p-0 pt-0">
        <div className="sticky top-0 z-10 pb-7 bg-[#762b94]">

          <div className="flex justify-between items-center">
            <div className="text-4xl flex flex-row items-center py-5">
              <h1 className="font-light text-white">
                To.
              </h1>
              <div className="flex justify-center items-center">
                <h1 className="font-bold text-white">D</h1>
                <div
                  className={`bg-transparent rounded-full w-[1.7rem] h-[1.7rem] bg-white flex justify-center items-center text-xl pr-[2px]`}
                >
                  <BsCheckLg color="#762b94" />
                </div>
              </div>
            </div>

            <button onClick={handleSignOut} className="text-xl text-white cursor-pointer">
              <PiSignOutBold />
            </button>
          </div>

          <div className="flex justify-center items-center">
            <input
              autoFocus
              type="text"
              onChange={(e) => setInputTitle(e.target.value)}
              value={inputTitle}
              placeholder="Digite sua tarefa!"
              onKeyDown={inputTitle.length > 0 ? handleKeyPress : undefined}
              ref={inputRef}
              className={`w-full px-4 py-2 text-black bg-gray-25 border border-gray-25 focus:border-white focus:outline-none placeholder:text-gray-30 text-base`}
            />
            <button
              onClick={inputTitle.length > 0 ? handleAdd : undefined}
              className="text-white bg-[#8847a3] h-[2.625rem] flex justify-center items-center w-11 text-lg"
            >
              <TbPlus />
            </button>

          </div>
        </div>


        <div className="overflow-y-auto">
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

    </div>
  )
}