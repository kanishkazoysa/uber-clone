import { router } from "expo-router";
import { Text, View } from "react-native";

import CustomButton from "@/components/CustomButton";
import GoogleTextInput from "@/components/GoogleTextInput";
// import RideLayout from "@/components/RideLayout";
import { icons } from "@/constants";
import { useLocationStore } from "@/store";
import { SafeAreaView } from "react-native-safe-area-context";

const FindRide = () => {
  const {
    userAddress,
    destinationAddress,
    setDestinationLocation,
    setUserLocation,
  } = useLocationStore();

  return (
    <SafeAreaView >
     <Text className="text-2xl">You are here: {userAddress}</Text>
     <Text className="text-2xl">You are going to : {destinationAddress}</Text>
    </SafeAreaView>
  );
};

export default FindRide;