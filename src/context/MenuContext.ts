import { createContext, useContext } from "react";

type MenuContextType = {
    isMenuOpen: boolean;
    toggleMenu: () => void;
};

export const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenu = () => {
    const context = useContext(MenuContext);
    if (!context) {
      throw new Error("useMenu must be used within a MenuProvider");
    }
    return context;
};
