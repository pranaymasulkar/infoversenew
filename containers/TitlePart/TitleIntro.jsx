import React from "react";

const TitleIntro = ({ Title, SubTitle, Classes }) => {
  return (
    <>
      <div className={Classes}>
        <h2 className="text-white fw-bold display-6 mb-3">{Title}</h2>
        <p className="fs-16 fw-medium mb-3 text-white">{SubTitle}</p>
      </div>
    </>
  );
};

export default TitleIntro;
