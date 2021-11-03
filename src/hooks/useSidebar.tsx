import { createContext, ReactNode, useContext, useState } from "react";

type SidebarProviderType = {
  sideBarIsMinimized: boolean;
  handleToggleSideBarIsMinimized: () => void;
};

type SidebarProviderProps = {
  children: ReactNode;
};

const SidebarContext = createContext({} as SidebarProviderType);

export function SidebarProvider({
  children,
}: SidebarProviderProps): JSX.Element {
  const [sideBarIsMinimized, setSideBarIsMinimized] = useState(false);

  const handleToggleSideBarIsMinimized = () => {
    setSideBarIsMinimized(!sideBarIsMinimized);
  };

  return (
    <SidebarContext.Provider
      value={{
        sideBarIsMinimized,
        handleToggleSideBarIsMinimized,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  return context;
}
