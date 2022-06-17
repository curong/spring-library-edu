import './App.css';

import PropsEx from './compnent/PropsEx';


function App() {

    return (
        <div className="App">
            <header className="App-header">

                <PropsEx age={10} />
                <PropsEx age={20} />
                <PropsEx age={30} />

            </header>
        </div>
    );
}

export default App;
