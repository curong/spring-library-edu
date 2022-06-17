import {useState} from "react";

const UseStateEx = () => {

// let name = `Mike`;

    const [name, setName] = useState('Mike');

    const changeName = () => {
        setName(name === `Mike` ? `Jane` : `Mike`)
    }

    return (
        <div>
            <h2>State</h2>
            <h2>컴포넌트의 속성값</h2>
            <h2 id="name">{name}</h2>
            <button
                // onClick={changeName}
                onClick={() => { setName(name === `Mike` ? `Jane` : `Mike`) }}
            >Change
            </button>
        </div>
    );


}

export default UseStateEx;