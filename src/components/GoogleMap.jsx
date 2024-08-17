import React from "react";
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => <div>{text}</div>;

export default function GoogleMap() {
    const defaultProps = {
        center: {
            lat: 12.962696466069342,
            lng: 77.60004045284832
        },
        zoom: 11
    };

    return (
  
        <div style={{ height: '100%', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <Marker
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
}