import { ReactNode } from "react";
import Sidebar from "./_components/Sidebar";

interface DashboardLayoutProps {
  children?: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <section className="flex h-screen w-full">
      <Sidebar />
      <div className="px-24 pt-27 flex-1 relative overflow-auto">
        <header id='breadcrumb-container' className=" absolute top-0 left-0 w-full"></header>
        {children}
      </div>
    </section>
  );
};

export default DashboardLayout;
