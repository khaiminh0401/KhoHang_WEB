import React, { useState } from "react";
function App() {
  const [data,setData] = useState({});
  const hanldeSubmit = (e)=>{
      e.preventDefault();
  }
  const handleChange = (e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setData({...data,[name]:value})
    console.log(data);
  }
  return (
    <div className="App">
        <form onSubmit={hanldeSubmit}>
          Username: <input type="text" name="username" 
                    onChange={handleChange} /> <br />
          Password: <input type="password" name="password" onChange={handleChange} /> <br />
          <button>Submit</button>
        </form>
    </div>
  );
}

export default App;
