'use client'
import Container from "@/components/Container";
import useGetMe from "@/hooks/endpoints/users/useGetMe";

interface UserLayoutProps {
  children: any;
}

const UserLayout = ({ children }: UserLayoutProps) => {
 useGetMe();

 


  return <Container>{children}</Container>;
};

export default UserLayout;
