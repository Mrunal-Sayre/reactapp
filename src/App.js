
import Add from './components/Add';
import User from './components/User';
import User_listing from './components/User_listing';



function App() {
  var user_data = {
    name:"Tushar",
    age:26,
    city:"Nagpur"
  }

  return (
    <div>
      {/* <h1>Hello React</h1>
      <h1>{5 * 5}</h1> */}
      <User_listing />
      {/* <User data={{name :"Mansi", age:22, city:"Mumbai" , avatar:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"}}/>
      <User data={user_data} /> */}
    </div>
  );
}

export default App;
