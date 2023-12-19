import React from "react";

function App() {
  return <React.Fragment>
    <div className="container mt-4">
      <h1>Phone Directory!</h1>
      <div>
        <button className="btn btn-primary m-3">Add New Contact</button>
      </div>
      <table class="table table-striped table-bordered">
        <thead class="bg-success text-white">
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
          </tr>
        </thead> 
      </table>
    </div>


  </React.Fragment>;

}

export default App;
