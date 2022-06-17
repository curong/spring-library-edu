import logo from '../logo.svg';
import '../App.css';
import Hello from '../compnent/ex1/hello'
import Welcome from "../compnent/ex1/Welcome";

function App() {
    const name = `재우`;
    const naver = {
        name: `Naver`,
        url: `https://www.naver.com`
    }
    return (
        <div className="App">
            <header className="App-header">
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                <h1
                    style={{
                        width: `calc(90% - 100px)`,
                        height: `calc(500px - 100px)`,
                        lineHeight: `calc(500px - 100px)`,
                        textAlign: `center`,
                        border: `50px solid #ffffff`,
                        borderRadius: `50px`,
                        color: `#ffffff`,
                        backgroundColor: `black`,
                    }}
                >
                    {name} {Math.random()}
                </h1>
                <div>
                    <a
                        style={{
                            textDecoration: "none",
                            fontSize: `100px`,
                            color: `green`
                        }}
                        href={naver.url}>{naver.name}</a>
                </div>

                <Hello />
                <Welcome />
            </header>
        </div>
    );
}

export default App;
