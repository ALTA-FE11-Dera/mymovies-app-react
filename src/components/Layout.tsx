import React, { FC } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-screen bg-gray-200 dark:bg-gray-600 flex flex-col overflow-auto">
      <Navbar />
      <div className="h-full overflow-auto">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
