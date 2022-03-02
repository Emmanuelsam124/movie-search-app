import React from "react";

const Header = (props) => {
  return (
    <div>
      <header className="App-header">
        <img
          style={{ width: 100, height: 100, borderRadius: 100 }}
          className="blaqCode-img"
          src="https://cdn.glitch.me/f516ad1b-be1f-48e6-9a65-d4502503cd7f%2Femmanuel-sam-blaqcode.jpg"
          alt="blaqCode"
        />
        <h2>{props.text} </h2>
        Web developer 🔥🔥
      </header>
    </div>
  );
};

export default Header;
