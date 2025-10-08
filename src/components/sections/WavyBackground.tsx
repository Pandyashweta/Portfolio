import { useEffect } from "react";
import { useTheme } from "next-themes";

const WavyBackground = () => {
  const { theme } = useTheme();

  // This effect ensures the body has the correct class when the theme is active
  useEffect(() => {
    if (theme === "wavy") {
      document.body.classList.add("wavy-theme-active");
    }
    // Cleanup function to remove the class when the component unmounts or theme changes
    return () => {
      document.body.classList.remove("wavy-theme-active");
    };
  }, [theme]);

  // Only render the background if the wavy theme is active
  if (theme !== "wavy") {
    return null;
  }

  return (
    <div className="wavy-background-container">
      <div className="wave">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};

export default WavyBackground;