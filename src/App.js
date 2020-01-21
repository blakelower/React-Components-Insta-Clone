/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, {useState} from "react";
import "./App.css";
import Search from './components/SearchBar/SearchBarContainer'
import Posts from './components/PostsContainer/PostsPage'
import dummyData from "./dummy-data"

const App = () => {
  const [data] = useState(dummyData)
  return (
    <div className="App">
      <Search />
      <Posts data={data} />
    </div>
  );
};

export default App;
