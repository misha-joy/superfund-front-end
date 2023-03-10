import { InfoWindow as GoogleInfoWindow } from "@react-google-maps/api";
import PropTypes from "prop-types";

const InfoWindow = (props) => {
  const { selectedMarker, setSelectedMarker } = props;
  return (
    <GoogleInfoWindow
      className="info-window"
      onCloseClick={() => {
        setSelectedMarker(null);
      }}
      position={{
        lat: selectedMarker["LATITUDE"],
        lng: selectedMarker["LONGITUDE"],
      }}
    >
      <>
        <h3>{selectedMarker["SITE_NAME"]}</h3>
        <p>
          {selectedMarker["SITE_STRT_ADRS1"] +
            " " +
            selectedMarker["SITE_CITY_NAME"] +
            ", " +
            selectedMarker["SITE_STATE"] +
            " " +
            selectedMarker["SITE_ZIP_CODE"]}
        </p>
        <p>
          Congressional District: {selectedMarker["SITE_STATE"]},{" "}
          {selectedMarker["SITE_CONG_DISTRICT"]}
        </p>
        <p>Status: {selectedMarker["NPL"]}</p>
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
