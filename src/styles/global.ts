import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  outline: 0;
  list-style: none;
  box-sizing: border-box;
  text-decoration: none;

  font-family: 'Inter', sans-serif;
}

button {
  cursor: pointer;

  :hover {
    transform: scale(1.06);
    transition: transform .2s;
  }
}

a {
  text-decoration: none;
  color: white;
}

:root {
  --black-default: #0e1012;
  --white-default: #fafafa;
  --gray-50: #f9fafa;
  --gray-100: #f1f1f2;
  --gray-200: #e7e7e8;
  --gray-300: #d3d4d5;
  --gray-400: #abadaf;
  --gray-500: #7d7f83;
  --gray-600: #52555a;
  --gray-700: #33373d;
  --gray-800: #1d2025;
  --gray-900: #171a1d;
  //Purple
  --purple-50: #f9f6fd;
  --purple-100: #e5daf8;
  --purple-200: #d3bef4;
  --purple-300: #b795ec;
  --purple-400: #a379e7;
  --purple-500: #8952e0;
  --purple-600: #7434db;
  --purple-700: #6023c0;
  --purple-800: #4f1d9e;
  --purple-900: #3b1676;
  //Pink
  --pink-50: #fdf5f9;
  --pink-100: #f8d9e7;
  --pink-200: #f3b9d3;
  --pink-300: #eb8db8;
  --pink-400: #e56ba2;
  --pink-500: #dc3882;
  --pink-600: #c4246c;
  --pink-700: #a01d58;
  --pink-800: #7d1745;
  --pink-900: #5d1133;
  //Red
  --red-50: #fdf6f5;
  --red-100: #f8d9d7;
  --red-200: #f2b7b4;
  --red-300: #ea8c87;
  --red-400: #e5726b;
  --red-500: #dd4840;
  --red-600: #c72d25;
  --red-700: #a1241e;
  --red-800: #891f19;
  --red-900: #641712;
  //Orange
  --orange-50: #fdfaf6;
  --orange-100: #f9ebdb;
  --orange-200: #f1d4b1;
  --orange-300: #e6b273;
  --orange-400: #dc9239;
  --orange-500: #c37b24;
  --orange-600: #a5681e;
  --orange-700: #835318;
  --orange-800: #674113;
  --orange-900: #553610;
  //Yellow
  --yellow-50: #fefefc;
  --yellow-100: #fbf9ea;
  --yellow-200: #f4eec2;
  --yellow-300: #ece192;
  --yellow-400: #dfce4b;
  --yellow-500: #bba922;
  --yellow-600: #95871c;
  --yellow-700: #746915;
  --yellow-800: #574f10;
  --yellow-900: #48410d;
  //Green
  --green-50: #f5fdf9;
  --green-100: #c6f5e0;
  --green-200: #83e9bb;
  --green-300: #28d889;
  --green-400: #23bd78;
  --green-500: #1ea367;
  --green-600: #198755;
  --green-700: #136942;
  --green-800: #105636;
  --green-900: #0d472d;
  //Teal
  --teal-50: #f1fcfc;
  --teal-100: #c0f1f4;
  --teal-200: #84e4e9;
  --teal-300: #2dd1da;
  --teal-400: #22b2ba;
  --teal-500: #1d979e;
  --teal-600: #187b80;
  --teal-700: #125f64;
  --teal-800: #0f5053;
  --teal-900: #0d4244;
  //Cyan
  --cyan-50: #f4fbfd;
  --cyan-100: #d0eef7;
  --cyan-200: #bae7f3;
  --cyan-300: #a2deee;
  --cyan-400: #53c2e1;
  --cyan-500: #2ab4d9;
  --cyan-600: #24a2c4;
  --cyan-700: #1e86a2;
  --cyan-800: #196e85;
  --cyan-900: #135567;
  //Blue
  --blue-50: #f1f6fd;
  --blue-100: #cde0f6;
  --blue-200: #a8c8f0;
  --blue-300: #7fafe8;
  --blue-400: #5896e1;
  --blue-500: #347fdb;
  --blue-600: #236abf;
  --blue-700: #1b5192;
  --blue-800: #164278;
  --blue-900: #123662;
}

`;
