import logo from './logo.svg';
import './App.css';
// import Table from 'react-bootstrap/Table';
import { Table } from 'react-bootstrap';

function App() {
  const users = [
    { name: "Rutwik", email: "abc@gmail.com", address: "Sangli" },
    { name: "Ram", email: "ram@gmail.com", address: "Kolhapur" },
    { name: "Shyam", email: "shyam@gmail.com", address: "Satara" },
    { name: "Jacob", email: "jacob@gmail.com", address: "Islampur" },
  ];

  return (
    <div className="App">
      <Table striped bordered variant="dark" hover responsive>
        <thead>
          <tr>
            <th>Sr no</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((item, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  );
}

export default App;