import React from "react";
import { ScrollProps } from "../interfaces/robot";

const Scroll: React.FC<ScrollProps> = (props) => {
  return (
    <div
      style={{ overflow: "scroll", border: "5px solid black", height: "800px" }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
