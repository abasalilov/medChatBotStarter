import React from "react";

const NotFoundPageComponent = props => {
  const { staticContext = {}, mobile } = props;
  staticContext.notFound = true;
  return (
    <div>
      <div>
        <h1 style={{ marginTop: "20rem", width: "24rem" }}>
          Whooops, route not found.
        </h1>
      </div>
    </div>
  );
};

export const NotFoundPage = {
  component: NotFoundPageComponent
};
