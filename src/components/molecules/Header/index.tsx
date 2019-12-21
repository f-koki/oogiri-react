import React from "react";
import Moon from "../../atoms/Moon";

const Header: React.FC = () => {
  return (
    <header className="Header">
      <div className="inner">
        {/* TODO: Home icon作成 */}
        <div className="home-icon">icon</div>
        {/* TODO: バーガーメニュー作成 */}
        <div className="burger-menue">burger</div>
        <Moon />
      </div>
    </header>
  );
};

export default Header;
