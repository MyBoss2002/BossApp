//common-layouts.js
import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
export default function Columnlayouts() {
return (
<View style={styles.container}>
    <View style={styles.item1}>
        <center><Text style={styles.text}>Salmon</Text></center>
    </View>
    <View style={styles.item2}>
        <center><Text style={styles.text}>SlateBlue</Text></center>
    </View>
    <View style={styles.item3}>
        <center><Text style={styles.text}>Tomato</Text></center>
    </View>
    <View style={styles.item4}>
        <center><Text style={styles.text}>Firebrick</Text></center>
    </View>
    <View style={styles.item5}>
        <center><Text style={styles.text}>MistyRose</Text></center>
    </View>
    <View style={styles.item6}>
        <center><Text style={styles.text}>SpringGreen</Text></center>
    </View>
    <View style={styles.item7}>
        <center><Text style={styles.text}>Orange</Text></center>
    </View>
</View>
)
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    flexDirection: 'row', 
    flexWrap: 'wrap'
    },
    item1: {
    height: 200,
    width: '100%',
    backgroundColor: '#FA8072',
    justifyContent: 'center', 
    },
    item2: {
        height: 100,
        width: '33.3%',
        backgroundColor: '#6A5ACD',
        justifyContent: 'center', 
        },
    item3: {
        height: 100,
        width: '33.3%',
        backgroundColor: '#FF6347',
        justifyContent: 'center', 
        },
    item4: {
        height: 100,
        width: '33.3%',
        backgroundColor: '#B22222',
        justifyContent: 'center', 
        },
    item5: {
        height: 100,
        width: '33.3%',
        backgroundColor: '#FFE4E1',
        justifyContent: 'center', 
        },
    item6: {
        height: 100,
        width: '33.3%',
        backgroundColor: '#00ff7f',
        justifyContent: 'center', 
        },
    item7: {
        height: 100,
        width: '33.3%',
        backgroundColor: '#FFA500',
        justifyContent: 'center', 
        },
    text: {color: '#ffff', fontSize: 20}
    })