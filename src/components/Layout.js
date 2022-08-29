import React from "react";

export default function Layout(props) {
  const { children } = props;
  return (
    <div>
      {children}
    </div>
  );
}
