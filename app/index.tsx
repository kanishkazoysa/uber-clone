import { Redirect } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

const Home = () => {
  const { isSignedIn } = useAuth();

 
  return <Redirect href="/(auth)/welcome" />;
};

export default Home;
