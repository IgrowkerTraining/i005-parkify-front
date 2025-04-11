import { Box} from "@mui/material";
import { ParkingFormProps } from "../types";
import styles from "../../../shared/styles/ParkingForm.module.css";
import ButtonPrimary from "../../../shared/ui/components/ButtonPrimary";
import ButtonSecondary from "../../../shared/ui/components/ButtonSecondary";
import ParkingBannerForm from "../../../shared/ui/components/ParkingBannerForm";
import ParkingDataFields from "../../../shared/ui/components/ParkingDataFields";
import { fields } from "../../../shared/constants/ParkingFields";

const ParkingRegistrationStep = ({ register, errors, setValue, trigger }: ParkingFormProps) => {
  return (
    <>
      <ParkingBannerForm setValue={setValue} errors={errors} trigger={trigger} />
      <ParkingDataFields
        fields={fields}
        register={register}
        errors={errors}
        setValue={setValue}
      />
      <Box className={styles.registerForm}>
        <ButtonPrimary text="Guardar cambios" type="submit" />
        <ButtonSecondary text="Cancelar" />
      </Box>
    </>
  );
};

export default ParkingRegistrationStep;
