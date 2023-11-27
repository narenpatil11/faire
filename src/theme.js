import { createTheme } from "@mantine/core";

const pale_violet = [
  "#f0eaff",
  "#987eff",
  "#b09cff",
  "#8464ff",
  "#5e36fe",
  "#4819fe",
  "#3b09ff",
  "#2d00e4",
  "#2600cc",
  "#1b00b4"
];

// [
//   "#f6eeff",
//   "#e7daf7",
//   "#cab1ea",
//   "#ad86dd",
//   "#9562d2",
//   "#854bcb",
//   "#7d3ec9",
//   "#6b31b2",
//   "#5f2aa0",
//   "#52228d"
// ];

export const theme = createTheme({
  /** Put your mantine theme override here */
  colors: {
    pale_violet
  },
  primaryColor: 'pale_violet',
});
