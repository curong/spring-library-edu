import dummy from '../../db/data.json'

export default function WordList() {
    const day = 1;
    const wordList = dummy.word.filter( d => {return d.day === day})
    return (
        <table style={{
            border: `1px solid white`,
        }}>
            <tbody>
            {wordList.map(word => {
                return (
                    <tr style={{
                        width : `1200px`,
                        border : `1px solid white`
                    }} id={word.id}>
                        <td style={{
                            width : `300px`,
                            border : `1px solid white`
                        }}
                        >{word.eng}</td>
                        <td style={{
                            width : `500px`,
                            border : `1px solid white`
                        }}>{word.kor}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    );
}