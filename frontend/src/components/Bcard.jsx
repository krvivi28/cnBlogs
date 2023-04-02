import React from "react";
const Bcard = (props) => {
  console.log(props.img);
  return (
    <>
      <div className="card md:w-[70%] shadow-md hover:scale-105 duration-300 hover:shadow-blue-500/40 rounded-md p-4 bg-[#111216] flex flex-col md:flex-row items-center justify-center ">
        <div className="left md:w-[30%] overflow-hidden">
          <img className="w-[200px]" src={`uploads/${props.img}`} alt="" />
        </div>
        <div className="right md:w-[70%] flex flex-col justify-center items-center gap-3 p-3">
          <h1 className="font-semibold text-3xl text-white ">{props.title}</h1>
          <div className="des font-lg text-white">
            <p>{props.des.slice(0, 100)}...</p>
          </div>

          <button
            onClick={() => {
              props.handleClick(props.id);
            }}
            className=" text-white px-8 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg py-1    shadow-blue-500/50 dark:shadow-lg  rounded-md "
          >
            Read More
          </button>
        </div>
      </div>
    </>
  );
};
export default Bcard;
