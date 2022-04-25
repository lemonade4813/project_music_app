import chartList from "../chartList.json"


export default function Chart(){

    return(
        <table className="chartList">
            <tr>
                <th>순위</th>
                <th>이미지</th>
                <th>이름</th>
                <th>아티스트</th>
            </tr>
            {chartList.musicList.map((list)=>(
                <tr key={list.rank}>
                    <td>{list.rank}</td>
                    <td><img src = {require(`../image/top20/${list.image}.jpg`)}/></td>
                    <td>{list.name}</td>
                    <td>{list.artist}</td>
                </tr>
            ))}
            
        </table>
    )

}