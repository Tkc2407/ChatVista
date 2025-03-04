import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const history = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent mt="60px">
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="#E9EFEC"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="5xl" fontWeight="bold" fontFamily="ui-rounded" textAlign="center" mb={12}>
          ChatVista
        </Text>
      {/* </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px"> */}
        <Tabs isFitted variant="soft-rounded" colorScheme='blue'>
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
