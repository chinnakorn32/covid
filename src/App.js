import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  componentDidMount() {
    const getconfirmed = document.getElementById('confirmed');
    const getrecover = document.getElementById('recover');
    const getdeaths = document.getElementById('deaths');
    const getupdatedate = document.getElementById('updatedate');

    axios.get('https://covid19.th-stat.com/json/covid19v2/getTodayCases.json').then(response => {
      console.log(response);
      getconfirmed.innerHTML = response.data.NewConfirmed;
      getrecover.innerHTML = response.data.NewRecovered;
      getdeaths.innerHTML = response.data.NewDeaths;
      getupdatedate.innerHTML = response.data.UpdateDate;
    });

  }
  render() {
    return (
      <>
        <div className="container font">
          <div className="jumbotron text-center mt-5">
            <h1>Covid</h1>
            <h5>ข้อมูลผู้ติดเชื้อ Covid-19 ของประเทศไทย</h5>
            <h5>อัปเดตเมื่อวันที่ : <span id="updatedate" /></h5>
            <h5>ผู้ติดเชื้อ : <span id="confirmed" /></h5>
            <h5>ผู้เสียชีวิต : <span id="deaths" /></h5>
            <h5>รักษาหาย : <span id="recover" /></h5>
          </div>
        </div>
      </>
    );
  }
}

export default App;