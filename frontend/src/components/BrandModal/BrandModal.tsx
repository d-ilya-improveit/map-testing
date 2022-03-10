import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Brand } from "../../types/brands";
import { BoldCaption, BrandLogo, BrandLogoWrapper, StyledChip } from "./styles";

type Props = {
  open: boolean;
  brand: Brand | null;
  onClose: () => void;
};

const BrandModal: React.FC<Props> = ({ brand, open, onClose }) => {
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>
        <Grid container spacing={2}>
          <Grid item>
            <Typography variant="h4">{brand?.name}</Typography>
          </Grid>
          <Grid
            item
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            xs
          >
            {brand?.tags.map((tag, index) => (
              <StyledChip key={index} label={tag} color="secondary" />
            ))}
          </Grid>
        </Grid>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <Grid container spacing={2} paddingTop={1}>
          <Grid item xs={4}>
            <BrandLogoWrapper>
              <BrandLogo src="/brand.jpg" />
            </BrandLogoWrapper>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1" marginBottom={2}>
              {brand?.description}
            </Typography>
            <Box marginBottom={3}>
              <Typography variant="subtitle2">
                <BoldCaption>Products available: </BoldCaption>
              </Typography>
              {brand?.products.map((product, index) => (
                <StyledChip key={index} label={product} />
              ))}
            </Box>

            <Typography variant="body2">
              <BoldCaption>Address:</BoldCaption> {brand?.address}
            </Typography>
            <Typography variant="body2">
              <BoldCaption>Minimum purchase amount:</BoldCaption>{" "}
              {brand?.minimumPurchaseAmount}
            </Typography>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default BrandModal;
