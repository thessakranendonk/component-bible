# React Typescript Tailwind Component Library

## Use

```javascript
yarn add techtessy
npm i techtessy
```

### Add TailwindCSS and update tailwind.config.js

```javascript
yarn add tailwindcss @tailwindcss/aspect-ratio @tailwindcss/forms @tailwindcss/line-clamp @tailwindcss/typography @headlessui/react
npm i tailwindcss @tailwindcss/aspect-ratio  @tailwindcss/forms @tailwindcss/line-clamp @tailwindcss/typography @headlessui/react
```

### Update or create tailwind.config.js and add the following

```javascript
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/techtessy/**/*.{html,js,ts}",
  ],
  presets: [require("./tailwind-preset")],
  darkMode: "media",
  theme: {
    extend: {
    },
  },
  plugins: [],
};
```

### Add a tailwind-preset.js file and add the following code

```javascript
const plugin = require("tailwindcss/plugin");

module.exports = {
  theme: {
    extend: {
        // add BG image
    //   backgroundImage: {
    //     "bg-image":"",
    //   },
      width: {
        mapXLBg: "64rem",
        mapXL: "60rem",
        carouselWidth: "60rem",
      },
      height: {
        mapSidePanelXL: "38rem",
        carouselHeight: "40rem",
      },
    },
  },
  plugins: [
    // popular tailwind plugins
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    plugin(function ({ addUtilities }) {
      const utilities = {
        ".inset-center": {
          top: "50%",
          left: "50%",
          "@apply -translate-x-1/2 -translate-y-1/2": {},
        },
        ".inset-y-center": {
          top: "50%",
          "@apply -translate-y-1/2": {},
        },
        ".inset-x-center": {
          left: "50%",
          "@apply -translate-x-1/2": {},
        },
      };

      addUtilities(utilities, ["responsive", "hover"]);
    }),   
  ],
};
```

### Add a styles folder to the src folder, within the styles folder add a file named tailwind.css and add:

```javascript
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Import tailwind.css in the app.tsx file (import might be different depending on folder structure)

```javascript
import "../styles/tailwind.css";
```

### Import Components and Types

```javascript
import { ArrowedCarousel } from "techtessy";
import { MapBusinessHoursProps} from "techtessy/lib/components/types/interfaces.types";
```

### Each component will have a readme file soon