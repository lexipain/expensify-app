import React from "react";

const EditExpensePage = props => {
  return <div>Currently editing item nr. {props.match.params.id}</div>;
};

export default EditExpensePage;
