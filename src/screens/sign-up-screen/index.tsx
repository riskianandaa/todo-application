import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { AuthScreenNavigationType } from "@/navigation/types";
import { Box, Text } from "@/utils/theme";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Button } from "react-native";

const SignUpScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>();
  const navigateToSigInScreen = () => {
    navigation.navigate("SignIn");
  };

  return (
    <SafeAreaWrapper>
      <Box>
        <Text>Sign in screen</Text>
        <Button title="Navigate to sign up" onPress={navigateToSigInScreen} />
      </Box>
    </SafeAreaWrapper>
  );
};

export default SignUpScreen;
