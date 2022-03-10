import React, { useEffect, useState } from "react";
import useAppSelector from "../../hooks/useAppSelector";
import {
  brandsSelector,
  brandsStatusesSelector,
} from "../../redux/brands/selectors";
import { getBrandsThunk } from "../../redux/brands/thunks";
import BrandBox from "../BrandBox";
import Loader from "../Loader";
import { NotFoundMessage, StyledBrandsList } from "./styles";

const BrandsList: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const statuses = useAppSelector(brandsStatusesSelector);
  const brands = useAppSelector(brandsSelector);

  useEffect(() => {
    if (statuses?.[getBrandsThunk.typePrefix]?.pending) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [statuses]);

  return (
    <StyledBrandsList>
      {loading ? (
        <Loader />
      ) : brands.length > 0 ? (
        brands.map((brand) => <BrandBox key={brand._id} brand={brand} />)
      ) : (
        <NotFoundMessage>No brands are found :(</NotFoundMessage>
      )}
    </StyledBrandsList>
  );
};

export default BrandsList;
