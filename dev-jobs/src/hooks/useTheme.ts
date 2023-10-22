import { useEffect, useState } from "react";

function useTheme(): [boolean, () => void] {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const newTheme = isDark ? "dark" : "light";

    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  }, [isDark]);

  function toggleTheme() {
    setIsDark((prev) => !prev);
  }

  return [isDark, toggleTheme];
}

export default useTheme;
