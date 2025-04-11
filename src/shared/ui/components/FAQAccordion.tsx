import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const faqs = [
  "¿Qué tipo de servicios ofrecemos?",
  "¿Cómo puedo contratar un servicio?",
  "¿Cuál es el horario de atención?",
  "¿Cuánto cuesta el servicio?",
  "¿Ofrecen planes de suscripción o pagos a plazos?",
];

const FAQAccordion: React.FC = () => {

    const [expanded, setExpanded] = useState<number | false>(false);

    const handleChange = (panel: number) => (
        _event: React.SyntheticEvent,
        isExpanded: boolean
      ) => {
        setExpanded(isExpanded ? panel : false);
      };

  return (
    <Box sx={{ maxWidth: 600, margin: "auto", mt: 5, textAlign: "center" }}>
       <Typography variant="h4" color="primary" fontWeight="bold">
        Consultas
      </Typography>

      {faqs.map((question, index) => (
        <Accordion 
            key={index} 
            expanded={expanded === index}
            onChange={handleChange(index)}
            sx={{ boxShadow: "none", backgroundColor: "background" }}>
          <AccordionSummary
            expandIcon={(expanded === index) ? <RemoveCircleOutlineIcon color='primary'/> : <AddCircleOutlineIcon color='primary' />}
            sx={{
              borderBottom: "1px solid #ddd",
              "&:hover": { backgroundColor: "#f9f9f9" },
            }}
          >
            <Typography color="primary" fontWeight="bold">
              {question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut urna
              lectus. 
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQAccordion;