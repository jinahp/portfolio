import { useState } from "react";

const Collapse = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div id="openCloseBox" onClick={() => setIsOpen(!isOpen)}>
        <div>{props.title}</div>
        <div
          id="openCloseBtn"
          style={{
            width: isOpen ? "6em" : "6em",
            marginBottom: isOpen ? "2em" : "",
          }}
        >
          {isOpen ? "CLOSE" : "OPEN"}
        </div>
      </div>
      {isOpen && props.children}
    </>
  );
};

export default Collapse;
