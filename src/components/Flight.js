import React from 'react';

class Flight extends React.Component {
    render() {
        const { flights } = this.props;
        if (!flights) {
          return <div>No flights</div>;
        } else {
          return (
            <ul>
              {flights.outboundFlights.map(item => (
                <li key={item.departureDate}>
                  {item.departureStation} -> {item.arrivalStation} <strong>{item.price.amount}</strong>
                </li>
              ))}
            </ul>
          );
        }
      }
}

export default Flight;