import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import TourScreen from '../screens/TourScreen';
import ContactScreen from '../screens/ContactScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
      />
      <BottomTab.Screen
        name="Tour"
        component={TourScreen}
        options={{
          title: 'Tour',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-walk" />,
        }}
      />
      <BottomTab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          title: 'Contact',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-contacts" />,
        }}
      /> 
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Home Cultural Fitness';
    case 'Tour':
      return 'Tour Cultural Fitness';
    case 'Contact':
      return 'Contact Cultural Fitness';
  }
}
