import React from "react";
import "./Splitter.scss";

interface Props {
  left: React.ReactNode,
  right: React.ReactNode,
  leftClassNames?: string,
  rightClassNames?: string, 
}

const Splitter: React.FC<Props> = ({
  left,
  right,
  leftClassNames = "",
  rightClassNames = "",
}) => {
  return (
    <div className="splitter">
      <div className={"left " + leftClassNames}>
        { left }
      </div>
      <div className={"right " + rightClassNames}>
        { right }
      </div>
    </div>
  )
}

export default Splitter;
