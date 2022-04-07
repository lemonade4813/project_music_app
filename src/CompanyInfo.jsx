import Location from './location';
export default function CompanyInfo() {

    return(
        <>
        <div className = "companyInfo">
            <p className ="companyInfoTitle">회사소개</p>
            <p>안녕하십니까. Music For You입니다.</p>
            <p>Music For You은 고객에게 음악으로 즐거움을 주고자 세워진 업력 3년차 음악 플랫폼 벤처기업입니다.</p>
            <p>저희 기업을 사랑하는 고객들이 성장의 중심에 있었기에 Music For you은 지속적으로 성장할 수 있었습니다.</p>
            <p>앞으로 Music For you는 은 고객에게 더 다가갈수 있는 기업이 되기 위해 모든 역량을 집중할 것입니다.</p>
            <p>저희 구성원은 모든 생각과 행동의 시작과 끝을 고객 입장이 되어 최고의 서비스를 제공하는 할 수 있도록 노력하겠습니다.</p>
            <p className="mottoAndLogo"><span className = "motto">Always by your side,</span><span className= "musicForYou">Music For you</span></p> 
        </div>
        <div className = "comeToCompany">
            <p className ="companyInfoTitle">오시는 길</p>
            <Location/>
            <p>(07621) 서울특별시 강서구 개화동로 25길</p>
        </div>
        </>
    
    )
}

