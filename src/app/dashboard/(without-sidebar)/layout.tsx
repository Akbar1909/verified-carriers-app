'use client'
import useGetMe from "@/hooks/endpoints/users/useGetMe";

interface UserLayoutProps {
  children: any;
}

const UserLayout = ({ children }: UserLayoutProps) => {
 const {isLoading, user} =  useGetMe();



  return <>{children}</>;
};

export default UserLayout;
