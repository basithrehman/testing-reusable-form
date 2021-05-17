import { Button, Input } from 'aknamed';

function App() {
return (
  <div middle center column className="page" gap={1.5}>
   <h3>This is my new project</h3>
   <Button label="test" kind="primary"/>
   <Input
  label="Input"
  primary
  required
  type="number"
/>
  </div>
);
}
export default App;