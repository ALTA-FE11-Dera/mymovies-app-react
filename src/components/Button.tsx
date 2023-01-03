import React, { Component } from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export class Button extends Component<ButtonProps> {
  render() {
    return <button onClick={this.props.onClick}>{this.props.label}</button>;
  }
}

export default Button;
