import React, { useState } from 'react';
import './App.css'; 

import Checkbox from './component/Checkbox.js';
import Counter from './component/Counter.js';
import Form from './component/Form.js';
import TextField from './component/TextField.js';

function App() {
  const [activeComponent, setActiveComponent] = useState(null);

 
  const componentMap = {
    Checkbox: <Checkbox />,
    Counter: <Counter />,
    Form: <Form />,
    TextField: <TextField />
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>컴포넌트 뷰어</h2>
      
      
      <div style={{ marginBottom: '20px' }}>
        {Object.keys(componentMap).map((name) => (
          <button 
            key={name}            
            onClick={() => setActiveComponent(name)}
            style={{ 
              marginRight: '10px', 
              padding: '5px 10px',
              backgroundColor: activeComponent === name ? '#007bff' : '#f0f0f0',
              color: activeComponent === name ? '#fff' : '#000'
            }}
          >
            {name}
          </button>
        ))}
      </div>
     
      <div style={{ border: '2px dashed #ccc', padding: '20px', minHeight: '150px' }}>
        {activeComponent ? (
          componentMap[activeComponent]
        ) : (
          <p style={{ color: '#888' }}>위의 버튼을 클릭하여 컴포넌트를 실행해 보세요.</p>
        )}
      </div>
    </div>
  );
}

export default App;