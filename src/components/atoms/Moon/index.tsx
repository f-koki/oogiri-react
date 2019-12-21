import React from "react";
import classnames from "classnames";

type Props = {
  color?: string;
};

const Moon: React.FC<Props> = ({ color }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      className="Moon"
    >
      <path
        className={classnames("moon-svg", { color })}
        d="M13.719 1.8c0.686 0.385 1.332 0.867 1.916 1.449 3.42 3.422 3.42 8.966 0 12.386s-8.965 3.42-12.386 0c-0.583-0.584-1.065-1.231-1.449-1.916 3.335 1.867 7.633 1.387 10.469-1.449s3.318-7.134 1.45-10.47z"
      ></path>
    </svg>
  );
};

export default Moon;
