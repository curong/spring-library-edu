import {useState} from "react";

const PropsEx = (props) => {
    const [name, setName] = useState('Mike');

    return (
        <div>
            <h2>State</h2>
            <h2>컴포넌트의 속성값</h2>
            <h2>{name} ({props.age})</h2>
            <button onClick={ () => { setName(name === `Mike` ? `Jane` : `Mike`) } }>Change</button>
        </div>
    );


}

export default PropsEx;