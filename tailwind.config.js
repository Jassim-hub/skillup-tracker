// JSDoc comment - tells your code editor this is a Tailwind CSS config file
// Enables autocomplete and error checking (like a label on a box)
/** @type {import('tailwindcss').Config} */

// 'export default' keyword - shares this configuration with other parts of your project
// Think of it like publishing your settings so the rest of your app can read them
export default {
  
  // 'content' property (key) - MOST IMPORTANT PART!
  // Array (list) that tells Tailwind which files to scan for CSS classes
  // Currently empty [] - you need to add your file paths here
  // Example: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]
  // This keeps your final CSS file small by only including styles you actually use
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  
  // 'theme' property (key) - object for customizing Tailwind's default styles
  theme: {
    // 'extend' property (key) - object that keeps all default Tailwind styles 
    // AND allows you to add your own custom colors, fonts, spacing, etc.
    // Empty {} means no custom styles added yet
    extend: {},
  },
  
  // 'plugins' property (key) - array for adding extra Tailwind features/extensions
  // Empty array [] means no plugins currently installed
  // You can add things like forms, typography, animations here later
  plugins: [],
}

// This entire object {...} is called the "configuration object"
// Each line with a colon (:) is a "property" or "key-value pair"
// Properties are separated by commas (,)
// This acts as the "control panel" for your website's styling system