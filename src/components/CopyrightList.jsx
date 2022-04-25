import axios from "axios";
import { useState } from "react";

export default function CopyrightList() {

const [datas, setData] = useState(null);

       axios
      .get('https://api.odcloud.kr/api/15071046/v1/uddi:abe42915-3cb5-477d-8d53-b7430e5567f0?page=1&perPage=30&serviceKey=GagNlrULGxksg16%2B71Pvi19nM5wOAy66KUlK5LF%2FfIXAe7fOeEPl3FyOBEJbnil91it6z5BSFNXDMxUMI9qEZg%3D%3D')
      .then((response) => {
        setData(response.data);
      });
    
    return(
        <ul>
            <table className = "copyrightTable">
                <tr>
                    <th>대리중개사명</th>
                    <th>아티스트명</th>
                    <th>앨범명</th>
                    <th>저작물명</th>
                    <th>제작사명</th>
                </tr>
            {datas && datas.data.map(data => (
                <tr>
                        <td>{data.대리중개사명}</td>
                        <td>{data.아티스트명}</td>
                        <td>{data.앨범명}</td>
                        <td>{data.저작물명}</td>
                        <td>{data.제작사명}</td>
                </tr>  
            ))}
            </table>
        </ul>
    )











    }

