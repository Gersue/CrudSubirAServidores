//import logo from "./logo.svg";
import "./App.css";
import ShowBlogs from "./blog/ShowBlogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateBlog from "./blog/CreateBlog";
import EditBlog from "./blog/EditBlog";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={'https://assets.stickpng.com/thumbs/580b585b2edbce24c47b270f.png'} className="App-logo" alt="" />
      </header>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowBlogs/>}/>
        <Route path="/create" element={<CreateBlog/>}/>
        <Route path="/edit/:id" element={<EditBlog/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
