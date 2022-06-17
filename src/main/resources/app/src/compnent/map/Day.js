import dummy from "../../db/data.json"

export default function Day() {
    console.log(dummy)

    let itemlist = document.querySelectorAll('list_item')
    itemlist.forEach( (e) => {
        e.addEventListener('click', () => {
            console.log(e)
            e.remove();
        })
    })

    return (
        <div>
            <ul style={{
                display: `flex`,
                width: `800px`,
                justifyContent : `space-around`
            }}
                className="list_item">
                {dummy.days.map(d => { // 맵 사용 후
                    return <li id={d.id}>Day ( {d.day} )</li> // 내부에서 리턴 해줄 것.
                })}
            </ul>
        </div>);
}