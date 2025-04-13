import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './navigation.jsx';
import ShuttleDrop from './shuttledropdown.jsx';
import Map from './map.jsx';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';

function Shuttle
() {
    const [selectedGroup, setselectedGroup] = useState(null);

    // temporary Static shuttle details
    const shuttles = [
        {
            name: 'Iveko Sprinter',
            group: 'A',
            departureTime: '08:30 AM',
            pickup: 'South Campus',
            destination: 'Humewood'
        },
        {
            name: 'Mercedes Sprinter',
            group: 'B',
            departureTime: '09:00 AM',
            pickup: 'Humewood',
            destination: 'North Campus'
        },
        {
            name: 'Ford Transit',
            group: 'A',
            departureTime: '10:15 AM',
            pickup: 'North End',
            destination: 'South Campus'
        },
        {
            name: 'Toyota Hiace',
            group: 'C',
            departureTime: '11:00 AM',
            pickup: 'Walmer',
            destination: 'North Campus'
        },
        {
            name: 'Nissan Caravan',
            group: 'B',
            departureTime: '12:30 PM',
            pickup: 'Main Terminal',
            destination: 'Harbor'
        },
        {
            name: 'Toyota Taxi',
            group: 'C',
            departureTime: '13:00 PM',
            pickup: 'North Campus',
            destination: 'North End'
        },
    ];
    const filteredShuttles = selectedGroup ?
    shuttles.filter(shuttle => shuttle.group == selectedGroup)
    : shuttles;

    return (
        <>
            <section className="mapAndShuttles">
                <div className="mapAndShuttles-container">
                    <div className="mapAndShuttles-hero">
                        <div className="shuttles-hero">
                            <h2>Available Shuttles</h2>
                            <ShuttleDrop setGroup={setselectedGroup}/>
                            <div id="schedule-container">
                                {filteredShuttles.map((shuttle, index) => (
                                    <div key={index} className="shuttle-details">
                                        <strong>Shuttle Name:</strong> {shuttle.name} <br />
                                        <strong>Group:</strong> {shuttle.group} <br />
                                        <strong>Departure Time:</strong> {shuttle.departureTime} <br />
                                        <strong>Pickup:</strong> {shuttle.pickup} <br />
                                        <strong>Drop Off:</strong> {shuttle.destination} <br />
                                        <hr />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="map-hero">
                            <h2>Current Location</h2>
                            <Map />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Shuttle;
