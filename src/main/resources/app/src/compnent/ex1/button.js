import style from '../../css/button.module.css'

const action1 = () => {

}

const action2 = () => {
    console.log(`2번 버튼 클릭`)
}

const showText = (e) => {
    console.log(e)
}




const nameTest = () => {
    return (
        <div>
            <h1 className={style.title}>Hello</h1>
            <button onClick={action1} className={style.button1}>Show Name
            </button>
            <button onClick={action2} className={style.button2}>Show Age
            </button>
            <input
                style={{
                    display: `block`,
                    width: '430px',
                    height: `30px`,
                    margin: `20px`
                }}
                // onChange={showText} // 방법 - 1
                // onChange={ e => {console.log(e.target.value)} } // 방법 - 2
                onChange={ e => {showText(e.target.value)}}
                type={"text"}/>
        </div>
    );
}

export default nameTest;