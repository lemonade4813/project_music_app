/*global kakao*/ 
import React, { useEffect } from 'react'

const Location=()=>{

  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.564877762520865, 126.80613254373857),
      level: 3
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(37.564877762520865, 126.80613254373857); 
    var marker = new kakao.maps.Marker({
      position: markerPosition
  });
  marker.setMap(map);

    }, [])


    return (
        <div class="mapContainer">
          <div id="map" style={{width:"500px", height:"400px"}}></div>
        </div>
    )
}

export default Location;