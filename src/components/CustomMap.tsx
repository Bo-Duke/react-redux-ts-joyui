import Map from 'react-map-gl/maplibre';

const CustomMap = ({ width, height }: { width: number | string; height: number | string }) => {
  return (
    <Map
      initialViewState={{
        longitude: 0,
        latitude: 0,
        zoom: 2,
      }}
      hash="map"
      style={{ width, height }}
      mapStyle="https://demotiles.maplibre.org/style.json"
    />
  );
};

export default CustomMap;
