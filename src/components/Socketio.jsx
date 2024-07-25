import { useEffect, useState } from 'react';
import io from 'socket.io-client';

// Replace with your server URL
const SERVER_URL = 'http://localhost:4000';

const Socketio = () => {
  const [sensorData, setSensorData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Initialize socket connection
    const socket = io(SERVER_URL, {
      transports: ['websocket'], // Ensure WebSocket is used for better performance
    });

    // Handle incoming sensor data
    socket.on('sensorData', (data) => {
      console.log('Received sensor data:', data);

      // Parse the payload if it's a string
      if (typeof data.payload === 'string') {
        try {
          data.payload = JSON.parse(data.payload);
        } catch (parseError) {
          console.error('Error parsing payload:', parseError);
          data.payload = {}; // Set payload to an empty object if parsing fails
        }
      }

      setSensorData((prevData) => [data, ...prevData]); // Update state with new data
      setLoading(false); // Set loading to false after data is received
    });

    // Handle connection errors
    socket.on('connect_error', (err) => {
      console.error('Connection error:', err);
      setError('Failed to connect to the server.');
      setLoading(false);
    });

    // Clean up on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  // Display loading and error states
  if (loading) {
    return <div>Loading sensor data...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Sensor Data</h1>
      <ul>
        {sensorData.length > 0 ? (
          sensorData.map((data, index) => (
            <li key={index} style={{ marginBottom: '10px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
              <h3>Sensor {index + 1}</h3>
              <div>
                <strong>ID:</strong> {data._id}
              </div>
            </li>
          ))
        ) : (
          <li>No sensor data available</li>
        )}
      </ul>
    </div>
  );
};

export default Socketio;
