import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { Moon, Sun } from "lucide-react";

type Mode = "light" | "dark";

const ThemeContext = createContext<{ mode: Mode; toggle: () => void }>({ mode: "light", toggle: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>("light");
  useEffect(() => {
    const stored = window.localStorage.getItem("eca-theme") as Mode | null;
    const initial = stored ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setMode(initial);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
    document.documentElement.style.colorScheme = mode;
  }, [mode]);
  const toggle = useCallback(() => {
    setMode((current) => {
      const next = current === "dark" ? "light" : "dark";
      window.localStorage.setItem("eca-theme", next);
      return next;
    });
  }, []);
  return <ThemeContext.Provider value={{ mode, toggle }}>{children}</ThemeContext.Provider>;
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { mode, toggle } = useContext(ThemeContext);
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={mode === "dark" ? "Switch to light appearance" : "Switch to dark appearance"}
      className={`flex size-9 items-center justify-center rounded-full border border-white/10 text-white/80 transition-all hover:border-white/20 hover:text-white ${className}`}
    >
      {mode === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}
