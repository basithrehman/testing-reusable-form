import { Button, Input, SingleSelect } from 'aknamed';

const options = [
  { value: 'option-1', label: 'option-1' },
  { value: 'option-2', label: 'option-2' },
  { value: 'option-3', label: 'option-3' }
]

function App() {
return (
  <div style={{margin:'auto', width: '40%', marginTop: '150px'}}>
   <h3 style={{textAlign: 'center', color: '#0c4040', marginBottom: '30px'}}>Aknamed Assignment</h3>

  <Input
    label="Input"
    primary
    required
    type="email"
    placeholder="Enter email ..."
  />

  <Input
    label="Input"
    primary
    required
    type="number"
    placeholder="Enter number ..."
  />

  <SingleSelect options={options}></SingleSelect>

  <div style={{ marginLeft: '45px', marginRight: '45px', marginTop: '20px' }}>
  <Button label="Submit" kind="primary"/>
  </div>
  </div>
);
}
export default App;