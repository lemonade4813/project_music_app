import React from "react";

export default function Genre() {
    return(
        <>
        <div className = "genreTitle">
            <p><img className = "genreImage" src = {require("../image/heart.jpg")}/><span className ="genre">장르 선택</span></p>
        </div>    
            <ul className ="genreSelect">
                <li>발라드</li>
                <li>댄스/팝</li>
                <li>포크/어쿠스틱</li>
                <li>아이돌</li>
                <li>랩/힙합</li>
                <li>알앤비/소울</li>
                <li>일렉트로닉</li>
                <li>락/메탈</li>
                <li>재즈</li>
                <li>인디</li>
                <li>성인가요</li>
        </ul>
        </>
    )
}




