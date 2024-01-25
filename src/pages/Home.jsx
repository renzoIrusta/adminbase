import { useState } from "react";

import SidebarComponent from "../components/SidebarComponent"
import { Outlet } from "react-router-dom"

// MUI
import { Box, Button } from "@mui/material"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
export default function Home() {

  const [toggle, setToggle] = useState(false);

  return (
    <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
      <SidebarComponent isToggled={toggle} setToggle={setToggle}/>
      
      <Box sx={{ flexGrow: 1, p: 3 }}>
        {/* Toggle button fixed top let with icon*/}
        <Button onClick={() => setToggle(!toggle)} sx={{ position: "fixed", top: 10, left: 10 }}><MenuOutlinedIcon /></Button>

        <Outlet />
      </Box>
    </div>
  )
}