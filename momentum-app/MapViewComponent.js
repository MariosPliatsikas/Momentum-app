// MapViewComponent.js
import React from 'react';
import MapView, { Marker } from 'react-native-maps';

const MapViewComponent = ({ markers }) => {
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {markers.map((marker, index) => (
        <Marker
          key={index}
          coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
          title={marker.title}
          description={marker.description}
        />
      ))}
    </MapView>
  );
};

export default MapViewComponent;

