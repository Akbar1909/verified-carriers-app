'use client'
import useGetMe from "@/hooks/endpoints/users/useGetMe";

interface UserLayoutProps {
  children: any;
}

const UserLayout = ({ children }: UserLayoutProps) => {
 useGetMe();

 


  return <>{children}</>;
};

export default UserLayout;
