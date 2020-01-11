import React from 'react';
import {View, Text} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {BufferView} from './decorators';
import {Form, FieldWrapper, TextInput, Switch} from '../components/Form';

const defaultTextInputProps = {
  label: 'Demo',
  onChangeText: action('onChangeText'),
};

storiesOf('Form/Switch', module)
  .addDecorator(BufferView)
  .add('default', () => <Switch label="Agree to Terms" value />)
  .add('with error', () => (
    <Switch
      label="Agree to Terms"
      message="You must agree to the Terms"
      messageType="error"
    />
  ));

storiesOf('Form/TextInput', module)
  .addDecorator(BufferView)
  .add('default', () => <TextInput {...defaultTextInputProps} />)
  .add('with placeholder', () => (
    <TextInput {...defaultTextInputProps} placeholder="demo placeholder" />
  ))
  .add('with value', () => (
    <TextInput {...defaultTextInputProps} value="hello value" />
  ))
  .add('with error message', () => (
    <TextInput
      {...defaultTextInputProps}
      message="This is an error"
      messageType="error"
    />
  ))
  .add('email', () => (
    <TextInput
      {...defaultTextInputProps}
      label="Email"
      value="kartalisge@gmail.com"
      keyboardType="email-address"
    />
  ))
  .add('password', () => (
    <TextInput
      {...defaultTextInputProps}
      label="Password"
      value="Password"
      secureTextEntry
    />
  ));

storiesOf('Form/FieldWrapper', module)
  .addDecorator(BufferView)
  .add('default', () => (
    <FieldWrapper label="Email">
      <Text>Hello, wrapper.</Text>
    </FieldWrapper>
  ))
  .add('error message', () => (
    <FieldWrapper
      label="Email"
      message="Please enter a valid Email"
      messageType="error">
      <Text>Hello, wrapper.</Text>
    </FieldWrapper>
  ))
  .add('success message', () => (
    <FieldWrapper label="Email" message="Looks legit!" messageType="success">
      <Text>Hello, wrapper.</Text>
    </FieldWrapper>
  ))
  .add('multiple fields', () => (
    <>
      <FieldWrapper label="Email">
        <Text>Hello, wrapper.</Text>
      </FieldWrapper>
      <FieldWrapper
        label="Email"
        message="Please enter a valid Email"
        messageType="error">
        <Text>Hello, wrapper.</Text>
      </FieldWrapper>
      <FieldWrapper label="Email" message="Looks legit!" messageType="success">
        <Text>Hello, wrapper.</Text>
      </FieldWrapper>
    </>
  ));

storiesOf('Form', module)
  .addDecorator(BufferView)
  .add('default', () => (
    <Form>
      <View style={{flex: 1, backgroundColor: '#e6e6e6'}} />
    </Form>
  ))
  .add('with header', () => (
    <Form header="Hello">
      <View style={{flex: 1, backgroundColor: '#e6e6e6'}} />
    </Form>
  ))
  .add('with header and subheader', () => (
    <Form
      header="Hello"
      subHeader="Welcome back. Kindly enter your login details.">
      <View style={{flex: 1, backgroundColor: '#e6e6e6'}} />
    </Form>
  ));
