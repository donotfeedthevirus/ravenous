import logo from './logo.svg';
import './App.css';

import BusinessList from './BusinessList'
import SearchBar from './SearchBar';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
