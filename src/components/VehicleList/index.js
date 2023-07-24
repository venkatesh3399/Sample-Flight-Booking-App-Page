import './index.css'

const VehicleList = ({vehicles}) => (
  <div>
    <h2>Available Vehicles:</h2>
    <ul className="bg-container">
      {vehicles.map(vehicle => (
        <li key={vehicle.id}>
          Airlines: {vehicle.airlines} | Capacity: {vehicle.capacity} | Price :{' '}
          {vehicle.price}
          <hr />
        </li>
      ))}
    </ul>
  </div>
)

export default VehicleList
