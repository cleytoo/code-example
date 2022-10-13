import { createContext, ReactNode, useContext, useState } from "react";
import { SessionProps } from "./session";

interface SessionDataProps {
  session: SessionProps;
  setNewSession: (newSession: SessionProps) => void;
}

const SessionContext = createContext({} as SessionDataProps);

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<SessionProps>(() => {
    const session = localStorage.getItem("@wk:session");
    if (session) {
      return JSON.parse(session);
    } else {
      return {} as SessionProps;
    }
  });

  const setNewSession = (newSession: SessionProps) => {
    localStorage.setItem("@wk:session", JSON.stringify(newSession));
    localStorage.setItem("@wk-version", "2.1.0");
    setSession(() => newSession);
  };

  return (
    <>
      <SessionContext.Provider value={{ session, setNewSession }}>
        {children}
      </SessionContext.Provider>
    </>
  );
};

export const useSession = () => useContext(SessionContext);
