import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import commonStyles from './common-styles'
import ColumnLayouts from './Column-layouts'
import ColumnItems from './column-items';

export default function App() {
  return (
    <View style = {commonStyles.container}>
      <center><Text style={commonStyles.TextTitle}> <h1>BossApp</h1> </Text></center>
      <ColumnLayouts/>
      <StatusBar style="auto" />
    </View>
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03FAA3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbold:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  }
}); */
