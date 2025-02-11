import { useState, ReactNode, useMemo, useEffect } from "react";
import { MenuContext } from "./MenuContext";

export default function MenuContextProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      const newState = !prev;
      document.body.classList.toggle("overflow-hidden", newState);
      return newState;
    });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        document.body.classList.remove("overflow-hidden");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Utilisation de useMemo pour éviter la recréation de l'objet à chaque rendu
  const value = useMemo(() => ({ isMenuOpen, toggleMenu }), [isMenuOpen]);

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}
