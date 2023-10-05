import Button from "@/components/button";
import theme, { Text } from "@/utils/theme";
import { ThemeProvider } from "@shopify/restyle";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Text variant="text2Xl">Open up App. on your app!</Text>
        <Button />
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
