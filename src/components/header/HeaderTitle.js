import React from "react";
import { Typograpy } from "../Typograpy";

export class HeaderTitle extends React.Component {
  render() {
    return <Typograpy fontSize={18}>{this.props.title}</Typograpy>;
  }
}
