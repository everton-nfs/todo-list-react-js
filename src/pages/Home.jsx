import { Item } from "../components/Item";

export function Home() {
  return (
    <div className="bg-[#1e1530ff] h-screen">
      <div className="mx-auto max-w-screen-md xl:max-w-screen-xs">
        <h1 className="uppercase text-white py-5">Todo List</h1>

        <input type="text" className={`w-full px-4 py-[3px] text-black bg-gray-25 border border-gray-25 focus:border-white focus:outline-none placeholder:text-gray-30 text-base mb-2`}/>
      
        <Item/>
        <Item/>
      </div>



    </div>
  )
}