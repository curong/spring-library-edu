import './App.css';


import Header from "./compnent/map/header";
import Day from "./compnent/map/Day";
import WordList from "./compnent/map/Word";


function App() {

    return (
        <div className="App">
            <header className="App-header">
                <Header/>
                <Day/>
                <WordList/>

            </header>
        </div>
    );
}

export default App;
