import {useState} from 'react'
import VehicleList from './components/VehicleList'

import './App.css'

const App = () => {
  const [pointA, setPointA] = useState('')
  const [pointB, setPointB] = useState('')
  const [date, setDate] = useState('')
  const [availableVehicles, setAvailableVehicles] = useState([])

  const handleSearch = () => {
    // You can make an API call here to fetch the data based on pointA, pointB, and date
    // For now, we'll just use dummy JSON data
    const dummyData = [
      {id: 1, airlines: 'IndiGo', capacity: 150, price: 11500},
      {id: 2, airlines: 'SpaceJet', capacity: 200, price: 20070},
      {id: 3, airlines: 'AirAsia', capacity: 120, price: 9020},
      {id: 4, airlines: 'Vistara', capacity: 290, price: 17000},
      {id: 5, airlines: 'Akasa', capacity: 170, price: 10000},
    ]

    setAvailableVehicles(dummyData)
  }

  return (
    <div className="bg-container">
      <h1 className="heading-name">Flight Booking App</h1>
      <form>
        <div className="fields">
          <label>
            FROM :
            <input
              type="text"
              value={pointA}
              placeholder="Enter city or airport"
              onChange={e => setPointA(e.target.value)}
            />
          </label>
          <label>
            TO :
            <input
              type="text"
              value={pointB}
              placeholder="Enter city or airport"
              onChange={e => setPointB(e.target.value)}
            />
          </label>
          <br />
          <label>
            Date:
            <input
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
            />
          </label>
          <button type="button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </form>
      <VehicleList vehicles={availableVehicles} />
    </div>
  )
}

export default App
