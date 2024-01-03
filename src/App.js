import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./Components/Add";
import Search from "./Components/Search";
import ViewAll from "./Components/ViewAll";
import NotFound from "./Components/NotFound";


function App() {
  return (
<BrowserRouter>

<Routes>
  <Route path="/" exact element={<Add/>}/>
  <Route path="/search" exact element={<Search/>}/>
  <Route path="/viewAll" exact element={<ViewAll/>}/>
  <Route path="*" exact element={<NotFound/>}/>
 
</Routes>
</BrowserRouter>
  );
}

export default App;
