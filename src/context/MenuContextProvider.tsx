import { useState, ReactNode, useMemo } from "react";
import { MenuContext } from "./MenuContext";

export default function MenuContextProvider({ children }: Readonly<{ children: ReactNode }>) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    // Utilisation de useMemo pour éviter la recréation de l'objet à chaque rendu
    const value = useMemo(() => ({ isMenuOpen, toggleMenu }), [isMenuOpen]);

    return (
        <MenuContext.Provider value={value}>
            {children}
        </MenuContext.Provider>
    );
}
