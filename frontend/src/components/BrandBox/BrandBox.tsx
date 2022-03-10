import React, { useState } from "react";
import { Brand } from "../../types/brands";
import BrandModal from "../BrandModal";
import {
  BrandContent,
  BrandDescription,
  BrandFooter,
  BrandLogo,
  BrandLogoWrapper,
  BrandName,
  BrandTag,
  Wrapper,
} from "./styles";

type Props = {
  brand: Brand;
};

const BrandBox: React.FC<Props> = ({ brand }) => {
  const [brandModalOpen, setBrandModalOpen] = useState(false);

  return (
    <>
      <Wrapper onClick={() => setBrandModalOpen(true)}>
        <BrandLogoWrapper>
          <BrandLogo src="/brand.jpg" alt="brand logo" />
        </BrandLogoWrapper>
        <BrandContent>
          <div>
            <BrandName>{brand.name}</BrandName>
            <BrandDescription>{brand.description}</BrandDescription>
          </div>
          <BrandFooter>
            {brand.tags.map((tag, index) => (
              <BrandTag key={index}>{tag}</BrandTag>
            ))}
          </BrandFooter>
        </BrandContent>
      </Wrapper>
      <BrandModal
        brand={brand}
        open={brandModalOpen}
        onClose={() => setBrandModalOpen(false)}
      />
    </>
  );
};

export default BrandBox;
