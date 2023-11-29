import { createContext, useState } from "react";

export const MemberContext = createContext(null);

function MemberContextProvider({ children }) {
  const [selectedMemberName, setSelectedMemberName] = useState();

  return (
    <MemberContext.Provider
      value={{ selectedMemberName, setSelectedMemberName }}
    >
      {children}
    </MemberContext.Provider>
  );
}

export default MemberContextProvider;
