// theme.js
const theme = {
  colors: {
    primary: "#68c184",
    secondary: "#2390ac",
    success: "#28a745",
    danger: "#dc3545",
    warning: "#ffc107",
    info: "#17a2b8",
    light: "#f8f9fa",
    text: "#262524",
  },
  fonts: {
    body: "'DM Sans', sans-serif",
    heading: "'Montserrat', sans-serif",
    monospace: "'Source Sans 3', monospace",
    accent: "'Nunito', sans-serif",
    display: "'Outfit', sans-serif",
  },
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
  },
  spacing: (factor) => `${factor * 8}px`,
};

export default theme;
