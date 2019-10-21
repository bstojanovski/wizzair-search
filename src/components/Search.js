import React from 'react';
import Flight from './Flight';

class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        data: []
      };
    }
  
    componentDidMount() {
      fetch("/9.19.2/Api/search/timetable", {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({"flightList":[{"departureStation":"NYO","arrivalStation":"SKP","from":"2019-10-27","to":"2019-11-03"},{"departureStation":"SKP","arrivalStation":"NYO","from":"2019-10-28","to":"2019-12-01"}],"priceType":"wdc","adultCount":1,"childCount":0,"infantCount":0})
      }).then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              data: result
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, data } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return <Flight flights={data} />
      }
    }
  }

  export default Search;