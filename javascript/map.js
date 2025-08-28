function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -18.86898, lng: 47.48806 }, 
      zoom: 17,
      mapId: "39da6c84efc23aa8a0ebe1e9", 
    });
  
    const marker = new google.maps.marker.AdvancedMarkerElement({
      map,
      position: { lat: -18.86898, lng: 47.48806 }, 
      title: "My house",
    });
  }
  