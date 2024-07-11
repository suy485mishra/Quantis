
import { Box } from "@mui/material";
import { styled } from "@mui/system"; // utility from MUI's system for creating custom-styled components
//mui-->react component library
const DashboardBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.light,

//   This refers to the light color in the background palette of the theme. It sets the background color of the DashboardBox
 
borderRadius: "1rem",
  boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, .8)",
}));

export default DashboardBox;