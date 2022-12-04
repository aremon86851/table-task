import logo from './logo.svg';
import './App.css';
import TableComponent from './component/TableComponent/TableComponent';
import { useEffect, useState } from 'react';

function App() {


  // Table 1 
  const table1 = ['Name', 'Email Address', 'Role']
  // Table 2
  const table2 = ['Email Address', 'Joining Date', 'Role']

  // Table 3
  const table3 = ['Name', 'City', 'Joining Date', 'Role']

  return (
    <div className="App max-w-3xl mx-auto">
      {/* Table 1 */}
      <TableComponent
        data={'tableTestData.json'}
        tableConfig={table1}
      />

      {/* Table 2 * */}
      <TableComponent
        data={'tableTestData.json'}
        tableConfig={table2}
      />

      {/* Table 3 */}
      <TableComponent
        data={'tableTestData.json'}
        tableConfig={table3}
      />
    </div>
  );
}

export default App;
