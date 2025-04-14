import { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { ParkingProfile } from "../components/ParkingProfile";
import { Parking } from "../../../shared/types/parking";
import { useParams } from "react-router-dom";

const ParkingProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const [parking, setParking] = useState<Parking | null>(null);

  useEffect(() => {
    if (!id) return;
    
      // Simulación de diferentes parkings por ID
      const mockParkings: Record<string, Parking> = {
        "1": {
          id: "1",
          name: "Armenia Parking",
          address: "Av. Armenia 123, Palermo",
          contactNumber: "600123456",
          hourlyRate: 900,
          totalCapacity: 30,
          availableSpots: 10,
          lat: 40.4168,
          lng: -3.7038,
          imageParking: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7", // demo
          openTime: "08:00",
          closeTime: "20:00",
          rating: 4.5,
          estimatedTime: "11 min",
          distance: "3.7",
        },
        "2": {
          id: "2",
          name: "Madrid Centro Parking",
          address: "Calle Mayor 45, Madrid",
          contactNumber: "600654321",
          hourlyRate: 1200,
          totalCapacity: 50,
          availableSpots: 25,
          lat: 40.4167,
          lng: -3.7035,
          imageParking: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
          openTime: "07:00",
          closeTime: "23:00",
          rating: 4.5,
          estimatedTime: "11 min",
          distance: "3.7",
        },
        "3": {
          id: "3",
          name: "Retiro Parking",
          address: "Calle O'Donnell 20, Madrid",
          contactNumber: "600789456",
          hourlyRate: 1000,
          totalCapacity: 20,
          availableSpots: 5,
          lat: 40.421,
          lng: -3.682,
          imageParking: "https://images.unsplash.com/photo-1603721735791-badee82b0d55",
          openTime: "06:00",
          closeTime: "22:00",
          rating: 4.5,
          estimatedTime: "11 min",
          distance: "3.7",
        },
      };
      
    
      const selectedParking = mockParkings[id];
    
      // Simula la carga con 500ms
      setTimeout(() => {
        setParking(selectedParking || null); // null si no existe ese ID
      }, 500);
    }, [id]);

    // 🔒 Protege contra null antes de renderizar
  if (!parking) {
    return (
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography variant="body1">Cargando datos del estacionamiento...</Typography>
      </Container>
    );
  }
    

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <ParkingProfile
        parking={parking}
        onReserve={() => {
          const phone = parking.contactNumber;
          const message = encodeURIComponent(`Hola, quiero reservar una plaza en ${parking.name}.`);
          window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
        }}
      />
    </Container>
  );
};

export default ParkingProfilePage;
