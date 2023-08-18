/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsCheckLg } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";


export function Notification(props) {

    const navigate = useNavigate();
    const [visible, setVisible] = useState(true);
  
    useEffect(() => {
      let timer;
      if (visible) {
        timer = setTimeout(() => {
          setVisible(false);
          navigate("/signin");
        }, 3000);
      }
  
      return () => clearTimeout(timer);
    }, [visible]);

    let icon;
    let title;
    let bgColor;
    let bgColorDiv;

    switch (props.type) {
      case "Success":
        icon = <BsCheckLg />;
        title = "Sucesso";
        bgColor = "#30d89b";
        bgColorDiv = "#defbe6";
        break;
      case "Error":
        icon = <IoMdClose size={16} />;
        title = "Erro";
        bgColor = "#da1b25";
        bgColorDiv = "#fff1f1";
        break;
      default:
        setVisible(false);
    }

  
    return (
      <>
        {visible && (
        <div className="w-full absolute p-3">
          <div 
            className="h-[2.75rem] border-l-4 flex justify-start items-center gap-x-2 px-2"
            style={{backgroundColor: bgColorDiv, borderLeftColor: bgColor}}
          >
            <div
              className={`rounded-full w-5 h-5 flex justify-center items-center text-4xl ${props.type === "Success" ? "pr-[2px]" : "pr-0"} text-white`}
              style={{backgroundColor: bgColor}}
            >
              {icon}
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-medium text-gray-600 overflow-hidden whitespace-nowrap text-ellipsis">
                {title}
                {" - "}
                <span className="font-light">{props.message}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
