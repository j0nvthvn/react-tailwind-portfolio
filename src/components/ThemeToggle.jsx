import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = ({ className = "", hideOnMobile = true }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
        <button onClick={toggleTheme} className={cn(
            hideOnMobile ? "fixed top-4 sm:top-5 right-4 sm:right-5 z-50" : "relative",
            "p-2 sm:p-2 rounded-full transition-colors duration-300",
            "focus:outline-none",
            hideOnMobile ? "max-sm:hidden" : "",
            "bg-secondary/20 hover:bg-secondary/40",
            className
        )}>
            {isDarkMode ? (
                <Sun className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-300"/>
            ) : (
                <Moon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-900"/>
            )}
        </button>
    );
}