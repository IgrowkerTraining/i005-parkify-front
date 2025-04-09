import { Box } from "@mui/material";

interface CardContainerProps {
  children: React.ReactNode;
}

const CardContainer = ({ children }: CardContainerProps) => {
  return (
      <Box
        borderRadius={1}
        sx={{
          mt:4,  
          p: 3,
          display: "flex", flexDirection: "column", alignItems:"center", gap:2,
          backgroundColor: (theme) => (theme.palette.tertiary as any)?.[100],
        }}
      >
        {children}
      </Box>
  );
};

export default CardContainer;
