import TanstackProvider from "./TanstackProvider";
import SessionProvider from "./SessionProvider";
import { Session } from "next-auth";

const GlobalProvider = ({
  children,
  session,
}: {
  children: any;
  session: Session | null;
}) => {
  return (
    <SessionProvider session={session}>
      <TanstackProvider>{children}</TanstackProvider>
    </SessionProvider>
  );
};

export default GlobalProvider;
