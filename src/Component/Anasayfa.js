import React, { Component } from 'react'
import axios from 'axios'
import '../App.css'

class Anasayfa extends Component {
  state = {
    country: [],
    flags: [],
  }
  componentDidMount = async () => {
    const response = await axios.get('https://restcountries.com/v2/all')
    this.setState({ country: response.data })
  }

  render() {
    return (
      <div>
        <div className="country">
          {this.state.country.map((ct) => {
            return (
              <div className="Country" key={ct.numericCode}>
                <img src={ct.flag} alt={ct.name} />
                <h2 className="Country-item">{ct.name}</h2>
              </div>
            )
          })}
        </div>
        <div className="Anasayfa">
          <h1>ANASAYFA</h1>
        </div>
      </div>
    )
  }
}

export default Anasayfa
