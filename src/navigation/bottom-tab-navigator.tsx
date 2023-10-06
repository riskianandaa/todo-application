import CompletedScreen from "@/screens/completed-screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigator from "./Home-stack-navigator";
import { RootBottomTabParamLIst } from "./types";
import TodayScreen from "@/screens/today-screen";
import CategoriesStackNavigator from "./categories-stack-navigator";
import Icons from "@/components/shared/icons";
import { useTheme } from "@shopify/restyle";

const Tab = createBottomTabNavigator<RootBottomTabParamLIst>();

const BottomTabNavigator = () => {
  const theme = useTheme()

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: theme.colors.gray550,
        tabBarHideOnKeyboard: true
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={() => ({
          title: "Home",
          tabBarIcon: ({ color }) => <Icons name="home" color={color} />,
          headerShown: false
        })}
      />
      <Tab.Screen
        name="Completed"
        component={CompletedScreen}
        options={() => ({
          title: "Completed",
          tabBarIcon: ({ color }) => <Icons name="completed" color={color} />,
          headerShown: false
        })}
      />
      <Tab.Screen
        name="Today"
        component={TodayScreen}
        options={() => ({
          title: "Today",
          tabBarIcon: ({ color }) => <Icons name="calendar" color={color} />,
          headerShown: false
        })}
      />
      <Tab.Screen
        name="CategoryStack"
        component={CategoriesStackNavigator}
        options={() => ({
          title: "Categories",
          tabBarIcon: ({ color }) => <Icons name="categories" color={color} />,
          headerShown: false
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
