export default function Header() {
    return (
        <div className="header">
            <h1>
                <div to="/">
                    <h1>
                        <a href='/'> 토익 영단어(고급)</a>
                    </h1>
                </div>
            </h1>
            <div className="menu">
                <div to="/create_word" className="link">
                    <h1>
                        <a href="#x"> 단어 추가</a>
                    </h1>
                </div>
                <div to="/create_day" className="link">
                    <h1>
                        <a href="#x"> Day 추가</a>
                    </h1>
                </div>
            </div>
        </div>);
}