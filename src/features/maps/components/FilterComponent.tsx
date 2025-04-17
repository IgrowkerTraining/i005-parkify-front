import { Box, Button, Checkbox, FormControlLabel, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomSlider from "./CustomSlider";
import useMapStore, { Filters } from "../store/useMap.store";

const MAX_DISTANCE = 5000; //metros

const FilterComponent = () => {
  const { filters, applyFilters, updateFilters, parkings } = useMapStore();
  const maxPrice = React.useMemo(() => {
    return Math.max(...parkings.map((p) => p.hourlyRate));
  }, [parkings]);

  const [price, setPrice] = React.useState<number>(maxPrice);
  const [distance, setDistance] = React.useState<number>(MAX_DISTANCE);
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  const handleFilterChange = (newFilters: Partial<Filters>) => {
    updateFilters(newFilters);
  };

  useEffect(() => {
    setPrice(filters.price ?? maxPrice);
    setDistance(filters.distance ?? MAX_DISTANCE);
    setIsOpen(filters.isOpen ?? null);
  }, [filters, maxPrice]);

  useEffect(() => {
    applyFilters();
  }, [filters, applyFilters]);

  const handlePriceChange = (newPrice: number) => {
    setPrice(newPrice);
    handleFilterChange({ price: newPrice });
  };

  const handleDistanceChange = (newDistance: number) => {
    setDistance(newDistance);
    handleFilterChange({ distance: newDistance });
  };

  const handleOpenChange = () => {
    let nextState: boolean;

  if (isOpen === true) {
    nextState = false; 
  } else {
    nextState = true;
  }

  setIsOpen(nextState);
  handleFilterChange({ isOpen: nextState });
  };

  const clearFilter = () => {
    setPrice(maxPrice);
    setDistance(MAX_DISTANCE);
    setIsOpen(null);
    handleFilterChange({
      price: Infinity,
      distance: Infinity,
      isOpen: null,
    });
  };

  return (
    <Box
      boxShadow={2}
      sx={{
        width: "70%",
        maxWidth: "400px",
        bgcolor: "#F6FFFC",
        position: "absolute",
        top: "8.2rem",
        right: 0,
        zIndex: 1100,
      }}
    >
      <Stack spacing={4} sx={{ py: 4, px: 2, mx: "auto" }}>
        <CustomSlider
          label="Precio por hora"
          min={0}
          max={maxPrice}
          minLabel={`$0`}
          maxLabel={`$${maxPrice}`}
          value={price}
          onChange={handlePriceChange}
        />
        <CustomSlider
          label="Distancia a mi"
          min={0}
          max={5000}
          minLabel={`0 Mt`}
          maxLabel={`5 Km`}
          value={distance}
          onChange={handleDistanceChange}
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={isOpen === true}
              indeterminate={isOpen === null}
              onChange={handleOpenChange}
            />
          }
          label="Abierto ahora"
        />
        <Box>
          <Button
            variant="text"
            onClick={() => {
              clearFilter();
            }}
          >
            Limpiar
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default FilterComponent;
