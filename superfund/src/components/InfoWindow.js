import { InfoWindow as GoogleInfoWindow } from "@react-google-maps/api";
import PropTypes from "prop-types";

const InfoWindow = (props) => {
  const { selectedMarker, setSelectedMarker } = props;
  return (
    <GoogleInfoWindow
      position={{
        lat: selectedMarker["LATITUDE"],
        lng: selectedMarker["LONGITUDE"],
      }}
    >
      <>
        <h1>{selectedMarker["SITE_NAME"]}</h1>
        <button
          onClick={() => {
            setSelectedMarker(null);
          }}
        >
          Close
        </button>
      </>
    </GoogleInfoWindow>
  );
};

InfoWindow.propTypes = {
  selectedMarker: PropTypes.shape({
    SITE_ID: PropTypes.string,
    SITE_NAME: PropTypes.string,
    SITE_STRT_ADRS1: PropTypes.string,
    SITE_STRT_ADRS2: PropTypes.string,
    SITE_CITY_NAME: PropTypes.string,
    SITE_STATE: PropTypes.string,
    SITE_ZIP_CODE: PropTypes.string,
    SITE_CONG_DISTRICT: PropTypes.string,
    SITE_CNTY_NAME: PropTypes.string,
    LATITUDE: PropTypes.number,
    LONGITUDE: PropTypes.number,
    ALT_AGREEMENT: PropTypes.string,
    NPL: PropTypes.string,
  }),
  setSelectedMarker: PropTypes.func,
};

export default InfoWindow;
