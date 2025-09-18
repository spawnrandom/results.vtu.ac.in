// src/data/captchaData.js

// Import all captcha images
import captcha1 from "./assets/c1.png";
import captcha2 from "./assets/c2.png";
import captcha3 from "./assets/c3.png";
import captcha4 from "./assets/c4.png";
import captcha5 from "./assets/c5.png";
import captcha6 from "./assets/c6.png";
import captcha7 from "./assets/c7.png";
import captcha8 from "./assets/c8.png";
// import captcha9 from "./assets/c.png";


// Captcha data object with image source and corresponding values
const captchaData = [
  {
    id: 1,
    image: captcha1,
    value: "v4KnTV"
  },
  {
    id: 2,
    image: captcha2,
    value: "BKxn6t"
  },
  {
    id: 3,
    image: captcha3,
    value: "YJar22"
  },
  {
    id: 4,
    image: captcha4,
    value: "BjEeeY"
  },
  {
    id: 5,
    image: captcha5,
    value: "jdfa6T"
  },
  {
    id: 6,
    image: captcha6,
    value: "YjBHwP"
  },
  {
    id: 7,
    image: captcha7,
    value: "XwGddf"
  },
  {
    id: 8,
    image: captcha8,
    value: "n3EsNT"
  }
];

// Utility functions
export const getRandomCaptcha = () => {
  const randomIndex = Math.floor(Math.random() * captchaData.length);
  return captchaData[randomIndex];
};

export const getCaptchaById = (id) => {
  return captchaData.find(captcha => captcha.id === id);
};

export const getAllCaptchas = () => {
  return captchaData;
};

// Default export
export default captchaData;