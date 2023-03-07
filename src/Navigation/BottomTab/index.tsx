import { Home } from '@Components/Pages/Home';
import { Profile } from '@Components/Pages/Profile';
import { Tab } from '@Navigation/BottomTab/consts';

export const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
