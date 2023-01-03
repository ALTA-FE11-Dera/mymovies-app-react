import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default class Layout extends Component<LayoutProps> {
  render() {
    return (
      <div className="w-full h-screen bg-slate-300 flex flex-col overflow-auto">
        <Navbar />
        <div className="h-full">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}
