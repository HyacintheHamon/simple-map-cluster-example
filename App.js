import React, {Component} from 'react';
import {StyleSheet, Image, Dimensions} from 'react-native';
import MapView from 'react-native-map-clustering';
import { Marker } from 'react-native-maps';
var scooterImg = require('./voi-marker.png');

const { width, height } = Dimensions.get("window");

export default class App extends Component{
  render() {
    return (
<MapView
    clustering = {true}
    clusterColor = '#000'
    clusterTextColor = '#fff'
    clusterBorderColor = '#fff'
    clusterBorderWidth = {4}
    region={{latitude: 52.5, longitude: 19.2,
             latitudeDelta: 8.5, longitudeDelta: 8.5}}
    style={{width: width, height: height}}>

    <Marker coordinate={{latitude: 52.0, longitude: 18.2}} cluster={true}>
        <Image source={scooterImg} style={styles.scooterImg} />
    </Marker>

    <Marker coordinate={{latitude: 52.4, longitude: 18.7}} cluster={true}>
        <Image source={scooterImg} style={styles.scooterImg} />
    </Marker>

    <Marker coordinate={{latitude: 52.1, longitude: 18.4}} cluster={true}>
        <Image source={scooterImg} style={styles.scooterImg} />
    </Marker>

    <Marker coordinate={{latitude: 52.6, longitude: 18.3}} cluster={true}>
        <Image source={scooterImg} style={styles.scooterImg} />
    </Marker>

    <Marker coordinate={{latitude: 51.6, longitude: 18.0}} cluster={true}>
        <Image source={scooterImg} style={styles.scooterImg} />
    </Marker>

    <Marker coordinate={{latitude: 53.1, longitude: 18.8}} cluster={true}>
        <Image source={scooterImg} style={styles.scooterImg} />
    </Marker>

    <Marker coordinate={{latitude: 52.9, longitude: 19.4}} cluster={true}>
        <Image source={scooterImg} style={styles.scooterImg} />
    </Marker>
</MapView>
    );
  }
}

const styles = StyleSheet.create({
  scooterImg: {
    width: 30,
    height: 37,
  },
});
