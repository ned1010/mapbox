// JavaScript for enabling the map on load. Change the access token and the web page.

mapboxgl.accessToken = 'pk.eyJ1IjoibmlkdXAxMDEwIiwiYSI6ImNsMXcwbno3czM3NjEzYnM5NDJqZmI0eTYifQ.ZhXkbHXZx8b6MZP6-dvIyg';

window.onload = function() {
  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/nidup1010/cl1w8a5pw000c15o6bowfiykq', // style URL
    center: [77.0688997, 20.5272803], // starting position [lng, lat]
    zoom: 4 // starting zoom
  });
};
