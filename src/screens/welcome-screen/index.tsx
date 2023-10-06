import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { AuthScreenNavigationType } from "@/navigation/types";
import { Box, Text } from "@/utils/theme";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Button } from "react-native";

const WelcomeScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"Welcome">>();
  const navigateToSignInScreen = () => {
    navigation.navigate("SignIn");
  };

  const navigateToSignUpScreen = () => {
    navigation.navigate("SignUp");
  };

  return (
    <SafeAreaWrapper>
      <Box>
        <Text>welcome screen</Text>
        <Button title="Navigate to sign in" onPress={navigateToSignInScreen} />
        <Button title="Navigate to sign up" onPress={navigateToSignUpScreen} />
      </Box>
    </SafeAreaWrapper>
  );
};

export default WelcomeScreen;
