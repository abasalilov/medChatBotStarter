import React from "react";
import ReactLoading from "react-loading";

const LoadingComponent = props => {
  const { isImage, loading } = props;
  // isImage then
  // check loading for style application
  // if loading show else don't
  // else showStyle
  const showStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  };

  const noStyle = { display: "none", visbility: "hidden" };

  const isImageStyle = loading ? showStyle : noStyle;
  return (
    <div className={props.classname}>
      <div style={isImage ? isImageStyle : showStyle}>
        <h1>Loading</h1>
        <ReactLoading type={"spin"} color={"#000"} delay={0} />
      </div>
    </div>
  );
};

export const Loading = LoadingComponent;
