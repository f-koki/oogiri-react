import React from "react";

type Props = {
  boke: string
}

const Boke: React.FC<Props> = ({ boke }) => {
  return (
    <div className="Boke">
      {boke}
    </div>
  );
};

export default Boke;
