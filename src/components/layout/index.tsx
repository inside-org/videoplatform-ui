import React, { PropsWithChildren } from "react";
import Sidebar from "Src/components/sidebar";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
        <Sidebar />
        { children }
    </div>
  );
}

export default Layout;