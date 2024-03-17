import { Avatar, Box, Button, Menu, MenuButton, MenuList, Text, Tooltip } from '@chakra-ui/react'
import {BellIcon, ChevronDownIcon} from "@chakra-ui/icons"
import React from 'react'

const SideDrawer = () => {
    return (
        <>
            <Box display={'flex'} justifyContent={"space-between"} bg={"white"} w={"100%"} p={"5px 10px 5px 10px"} borderWidth={"5px"}>
                <Tooltip label="Search Users to chat" hasArrow placement='bottom-end'>
                    <Button variant="ghost">
                        <i class="fas fa-search"></i>
                        <Text display={{ base: "none", md: "flex" }} px="4">
                            Search User
                        </Text>
                    </Button>
                </Tooltip>
                <Text fontSize={"2x1"} fontFamily={"work sans"}>ChatVista</Text>
                <div>
                    <Menu>
                        <MenuButton p={"1"}>
                            <BellIcon fontSize={"2xl"} m={"1"} />
                        </MenuButton>
                        {/* <MenuList></MenuList> */}
                    </Menu>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
                            <Avatar></Avatar>
                        </MenuButton>
                        {/* <MenuList></MenuList> */}
                    </Menu>
                </div>
                
            </Box>
        </>
    )
}

export default SideDrawer
