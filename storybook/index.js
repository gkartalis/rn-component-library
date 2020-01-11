import {AppRegistry} from 'react-native';
import {getStorybookUI, configure} from '@storybook/react-native';
import {loadStories} from './storyLoader';
import './rn-addons';

// import stories
configure(() => {
  loadStories();
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;
