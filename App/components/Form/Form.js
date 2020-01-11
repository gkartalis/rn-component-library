import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
  },
  topRow: {
    marginBottom: 28,
  },
  headerText: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: 32,
    marginBottom: 12,
  },
  subHeaderText: {
    color: colors.gray,
    fontSize: 20,
    marginBottom: 12,
  },
});

export default ({header, subHeader, children}) => (
  <View style={styles.container}>
    {(header || subHeader) && (
      <View style={styles.topRow}>
        {header && <Text style={styles.headerText}>{header}</Text>}
        {subHeader && <Text style={styles.subHeaderText}>{subHeader}</Text>}
      </View>
    )}
    {children}
  </View>
);
