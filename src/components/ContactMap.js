import React, { useEffect } from 'react';

const ContactMap = () => {
    useEffect(() => {
        // Load the Google Maps JavaScript API script
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyADglDE__-05Z8E48DbyR31qe9cgHkPNeQ&callback=initMap`;
        script.async = true;
        window.initMap = initMap;
        document.body.appendChild(script);

        return () => {
            // Clean up the script tag
            document.body.removeChild(script);
        };
    }, []);

    const initMap = () => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: 43.0117, lng: -88.2315 }, // Waukesha coordinates
            zoom: 14,
        });

        new window.google.maps.Marker({
            position: { lat: 43.0117, lng: -88.2315 }, // Waukesha coordinates
            map,
            title: 'Waukesha',
        });
    };


    return <div id="map" style={{ width: '100%', height: '400px' }} />;
};

export default ContactMap;
