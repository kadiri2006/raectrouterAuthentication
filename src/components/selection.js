import React, { Children } from "react";

export default function Selection(props) {
  return (
    <div>
      <span>this is selection page</span>
      {props.children}
    </div>
  );
}
