import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 40,
    marginHorizontal: 40,
  },
  safeAreaView: {
    flex: 1,
  },
});

export const BufferView = storyFn => (
  <SafeAreaView style={styles.safeAreaView}>
    <View style={styles.container}>{storyFn()}</View>
  </SafeAreaView>
);
