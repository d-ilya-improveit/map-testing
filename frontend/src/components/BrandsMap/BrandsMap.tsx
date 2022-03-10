import mapboxgl from "mapbox-gl";
import React, { useCallback, useEffect, useState } from "react";
import Map, { ViewStateChangeEvent, Marker } from "react-map-gl";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import useDebounce from "../../hooks/useDebounce";
import { brandsSelector } from "../../redux/brands/selectors";
import { getBrandsThunk } from "../../redux/brands/thunks";
import { Brand, GetBrandsQuery } from "../../types/brands";
import BrandModal from "../BrandModal";
import { StyledMarkerLogo, StyledMarkerWrapper } from "./styles";

type StateCoords = { lat: number; lng: number };

const BrandsMap: React.FC = () => {
  const dispatch = useAppDispatch();
  const [bounds, setBounds] = useState<GetBrandsQuery | null>(null);
  const [coords, setCoords] = useState<StateCoords | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const debouncedBounds = useDebounce(bounds, 500);
  const brands = useAppSelector(brandsSelector);

  useEffect(() => {
    if (!mapboxgl.accessToken) {
      mapboxgl.accessToken =
        "pk.eyJ1IjoiaWxpYWR1Ym92IiwiYSI6ImNsMGpsNGpwZjBka2EzaW05M3YxanNiN2IifQ.k8ffqVX8X13QikgqXbEz8g";

      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            lng: position.coords.longitude,
            lat: position.coords.latitude,
          });
        },
        () => {
          setCoords({ lng: 2.349014, lat: 48.864716 });
        }
      );
    }
  }, []);

  useEffect(() => {
    if (debouncedBounds) {
      dispatch(getBrandsThunk(debouncedBounds));
    }
  }, [debouncedBounds, dispatch]);

  const onTransformEnd = useCallback((event: ViewStateChangeEvent) => {
    const bounds = event.target.getBounds();
    setBounds({
      latStart: bounds.getNorth(),
      latEnd: bounds.getSouth(),
      lngStart: bounds.getWest(),
      lngEnd: bounds.getEast(),
    });
  }, []);

  const onBrandClick = useCallback((brand: Brand) => {
    setSelectedBrand(brand);
  }, []);

  return coords ? (
    <>
      <Map
        initialViewState={{
          latitude: coords?.lat,
          longitude: coords?.lng,
          zoom: 11,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        style={{ width: "100vw", height: "100vh" }}
        onZoomEnd={onTransformEnd}
        onMoveEnd={onTransformEnd}
      >
        {brands.map((brand) => (
          <Marker
            key={brand._id}
            longitude={brand.coordinates.lng}
            latitude={brand.coordinates.lat}
            onClick={() => onBrandClick(brand)}
          >
            <StyledMarkerWrapper>
              <StyledMarkerLogo src="/brand.jpg" />
            </StyledMarkerWrapper>
          </Marker>
        ))}
      </Map>
      <BrandModal
        open={!!selectedBrand}
        brand={selectedBrand}
        onClose={() => setSelectedBrand(null)}
      />
    </>
  ) : null;
};

export default BrandsMap;
