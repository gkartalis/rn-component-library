// export default from '../storybook';

import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Form, Switch, TextInput} from './components/Form';
import {Button} from './components/Button';

export default () => {
  const [switchValue, setSwitchValue] = useState(true);
  const toggleSwitchValue = () => setSwitchValue(!switchValue);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Form header="Hello" subHeader="Please create a new account">
        <TextInput label="Email" keyboardType="email-address" />
        <TextInput label="Password" secureTextEntry />
        <TextInput label="Confirm password" secureTextEntry />
        <Switch
          label="Agree to Terms"
          onChange={toggleSwitchValue}
          value={switchValue}
        />
        <Button>Sign Up</Button>
        <Button outline>Sign In</Button>
      </Form>
    </SafeAreaView>
  );
};
