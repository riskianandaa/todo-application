import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { AuthScreenNavigationType } from "@/navigation/types";
import { Box, Text } from "@/utils/theme";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Button } from "react-native";

const SignInScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignIn">>();
  const navigateToSigUpScreen = () => {
    navigation.navigate("SignUp");
  };

  return (
    <SafeAreaWrapper>
      <Box>
        <Text>Sign in screen</Text>
        <Button title="Navigate to sign up" onPress={navigateToSigUpScreen} />
      </Box>
    </SafeAreaWrapper>
  );
};

export default SignInScreen;
