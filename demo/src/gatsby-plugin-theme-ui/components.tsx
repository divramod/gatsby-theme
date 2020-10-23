/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from "react";

export default {
  h1: (props: any) => (
    <h1 {...props}>
      <a href={`#${props.id}`}>{props.children}</a>
    </h1>
  ),
  h2: (props: any) => (
    <h2 {...props}>
      <a href={`#${props.id}`}>{props.children}</a>
    </h2>
  ),
  h3: (props: any) => (
    <h3 {...props}>
      <a href={`#${props.id}`}>{props.children}</a>
    </h3>
  ),
};
