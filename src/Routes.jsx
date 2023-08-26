import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import PreLogin from './screens/navigation/PreLogin';
import PostLogin from './screens/navigation/PostLogin';

const Routes = () => {
  const [user, setUser] = React.useState(1);
  return (
    <NavigationContainer>
      {user === 1 ? <PreLogin /> : <PostLogin />}
    </NavigationContainer>
  );
};

export default Routes;
