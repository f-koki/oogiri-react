import React from "react";

const Header: React.FC = () => {
  return (
    <header className="Header">
      <div className="inner">
        {/* TODO: Home icon作成 */}
        <div className="home-icon">icon</div>
        {/* TODO: バーガーメニュー作成 */}
        <div className="burger-menue">burger</div>
        <img src="./assets/svg/moon.svg" alt="" />
      </div>
    </header>
  );
};

export default Header;
