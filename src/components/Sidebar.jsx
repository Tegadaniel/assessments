import React from "react";
import { Text, Box } from "@chakra-ui/react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarContent,
} from "react-pro-sidebar";
import "./Styles.css";
import { BiMessage, BiUsb, BiWalk } from "react-icons/bi";
import { FiBarChart, FiTool, FiStar } from "react-icons/fi";
import { GrCube, GrHomeRounded } from "react-icons/gr";
import { BsPersonCircle } from "react-icons/bs";
import "react-pro-sidebar/dist/css/styles.css";

const Sidebar = ({ initialState }) => {
  return (
    <>
      <div id="header">
        <ProSidebar>
          <SidebarContent>
            <Menu>
              <Box as="div">
                <MenuItem icon={<GrCube size="lg" color="#0B3E9E" />}>
                  <Text as="h2" color="#0B3E9E" fontSize="lg" ml="13px">
                    bluecube
                  </Text>
                </MenuItem>
              </Box>
              <hr />
              <Box as="div" mt="5px">
                <MenuItem
                  active={(initialState = true)}
                  icon={
                    <GrHomeRounded
                      style={
                        initialState ? { color: "#0B3E9E" } : { color: "gray" }
                      }
                    />
                  }
                >
                  <Text
                    color={initialState ? "#353537" : "gray"}
                    fontSize="sm"
                    ml="13px"
                  >
                    Home
                  </Text>
                </MenuItem>
              </Box>
              <Box as="div" mt="5px">
                <MenuItem icon={<BiMessage style={{ color: "gray" }} />}>
                  <Text fontWeight="500" color={"gray"} fontSize="sm" ml="13px">
                    Message
                  </Text>
                </MenuItem>
              </Box>
              <Box
                as="h5"
                ml="28px"
                fontWeight="bold"
                color="#353537"
                fontSize="md"
                mt="5px"
              >
                SHARE
              </Box>
              <Box as="div" mt="5px">
                <MenuItem icon={<FiBarChart style={{ color: "gray" }} />}>
                  <Text fontWeight="500" color={"gray"} fontSize="sm" ml="13px">
                    Ranking
                  </Text>
                </MenuItem>
              </Box>
              <Box as="div" mt="5px">
                <MenuItem icon={<FiTool style={{ color: "gray" }} />}>
                  <Text fontWeight="500" color={"gray"} fontSize="sm" ml="13px">
                    Challenge
                  </Text>
                </MenuItem>
              </Box>
              <Box as="div" mt="5px">
                <MenuItem icon={<FiStar style={{ color: "gray" }} />}>
                  <Text fontWeight="500" color={"gray"} fontSize="sm" ml="13px">
                    Party
                  </Text>
                </MenuItem>
              </Box>
              <Box as="div" mt="5px">
                <MenuItem icon={<BiUsb style={{ color: "gray" }} />}>
                  <Text fontWeight="500" color={"gray"} fontSize="sm" ml="13px">
                    Connect
                  </Text>
                </MenuItem>
              </Box>
              <Box as="div" mt="5px">
                <MenuItem icon={<BiWalk style={{ color: "gray" }} />}>
                  <Text fontWeight="500" color={"gray"} fontSize="sm" ml="13px">
                    Parade
                  </Text>
                </MenuItem>
              </Box>
              <Box as="div" mt="5px">
                <MenuItem icon={<BsPersonCircle style={{ color: "gray" }} />}>
                  <Text fontWeight="500" color={"gray"} fontSize="sm" ml="13px">
                    Group
                  </Text>
                </MenuItem>
              </Box>
            </Menu>
          </SidebarContent>
          {/* <SidebarFooter>
            <Menu>
              <MenuItem icon={<FiLogOut style={{ color: "#FF6464" }} />}>
                Logout
              </MenuItem>
            </Menu>
          </SidebarFooter> */}
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;
