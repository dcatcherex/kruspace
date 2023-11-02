"use client";

import { type } from "os";
import { NavMenu } from "./nav-menu";
import { Button } from "./ui/button";

type CardDataType = {
  id: number;
  title: string;
  content: string;
};



const TestCard = ({id, title, content}:CardDataType) => {


  return (
    <div className="container">
      <NavMenu />
      <div className="m-4 grid grid-cols-3">
        
        <div
          className=" group rounded-lg bg-slate-500 p-4 transition-all duration-75 hover:scale-110"
          onClick={() => console.log("click")}
        >
          TestCard
          <Button
            onClick={(event) => {
              event.stopPropagation();
              console.log("button click");
            }}
          >
            Button
          </Button>
          <p className="hidden group-hover:block">text1</p>
          <p className="hidden group-hover:block">text2</p>
          <Button className="opacity-0 group-hover:opacity-100">
            second button
          </Button>
        </div>
        <div
          className=" group rounded-lg bg-slate-500 p-4 transition-all duration-75 hover:scale-110"
          onClick={() => console.log("click")}
        >
          TestCard
          <Button
            onClick={(event) => {
              event.stopPropagation();
              console.log("button click");
            }}
          >
            Button
          </Button>
        </div>
        <div
          className=" group rounded-lg bg-slate-500 p-4 transition-all duration-75 hover:scale-110"
          onClick={() => console.log("click")}
        >
          TestCard
          <Button
            onClick={(event) => {
              event.stopPropagation();
              console.log("button click");
            }}
          >
            Button
          </Button>
        </div>
      </div>
    </div>
  );
};
export default TestCard;
