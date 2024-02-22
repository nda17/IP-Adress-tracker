import L from 'leaflet';

// Отрисовка карты (библиотека leaflet)
export function addTileLayer(map) {
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19
    }).addTo(map);
};
