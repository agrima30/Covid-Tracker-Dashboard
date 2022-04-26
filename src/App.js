import React from 'react';
import Card from './components/Card/Card';
import Chart from './components/Chart/Chart';
import CountrySearch from './components/CountrySearch/CountrySearch';

import styles from './App.module.css';
import { fetchData, fetchGlobal } from './api';

class App extends React.Component {

  state = {
    data : {},
  }

  async componentDidMount(){
    await fetchData().then((fetchedData)=>(this.setState({data:fetchedData})));
  }
  
  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data, country: country });
  }

  render() {

    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <Card data={data}/>
        <CountrySearch handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
      </div>
    );
  }
  
}

export default App;
