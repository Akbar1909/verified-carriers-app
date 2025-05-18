'use client';
import {SessionProvider as AuthSessionProvider} from 'next-auth/react';
import {Session} from 'next-auth';

const SessionProvider = ({session, children}: {session: Session | null; children: any}) => {
  return <AuthSessionProvider session={session}>{children}</AuthSessionProvider>;
};

export default SessionProvider;
