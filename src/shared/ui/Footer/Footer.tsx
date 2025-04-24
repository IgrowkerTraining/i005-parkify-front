import { Box, Container, Typography } from "@mui/material";
import { Instagram, YouTube, LinkedIn } from "@mui/icons-material";
import twitterLogo from "../../../assets/logo/logo-twitter.svg";
import logoParkify from "../../../assets/logo/logo-blanco.svg";
import {
  FooterWrapper,
  FooterContent,
  LogoImage,
  SocialIcons,
  SocialButton,
  FooterLink,
} from "./Footer.styles";

const Footer: React.FC = () => {
  return (
    //<FooterWrapper component="footer" id="siguenos">
    <FooterWrapper id="siguenos">
      <Container  sx={{px:{xs:4, sm:6, md:8}}}>
        <FooterContent
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "flex-start",
            alignItems: {xs: "flex-start", sm:"flex-end"},
            gap: { xs: 4, sm: 8 },
            pb: {xs:8, sm:16}
          }}
        >
          <Box display="flex" flexDirection="column" >
            <LogoImage src={logoParkify} alt="Logo de Parkify" />

            <SocialIcons sx={{ display: "flex", gap: 2 }}>
              {/* <SocialButton href="#" aria-label="X"> 
              Aquí borre el href porque daba error*/}
              <SocialButton aria-label="X">
                <img src={twitterLogo} alt="X"  style={{ width: 20, height: 20, display: "block", objectFit: "contain" }} />
              </SocialButton>
              <SocialButton aria-label="Instagram">
                <Instagram sx={{ fontSize: 24 }} />
              </SocialButton>
              <SocialButton  aria-label="YouTube">
                <YouTube sx={{ fontSize: 24 }}/>
              </SocialButton>
              <SocialButton aria-label="LinkedIn">
                <LinkedIn sx={{ fontSize: 24 }}/>
              </SocialButton>
            </SocialIcons>
          </Box>
         
          <Box display="flex" flexDirection="column" gap={2} pl={3}>
            <Typography variant="body2">
              <FooterLink href="mailto:consultas@parkify.com">
                consultas@parkify.com
              </FooterLink>
            </Typography>

            <Typography variant="body2">
              <FooterLink href="#sobre-nosotros">Sobre nosotros</FooterLink>
            </Typography>

            <Typography variant="body2">
              <FooterLink href="#terminos-y-condiciones">
                Términos y condiciones
              </FooterLink>
            </Typography>

            <Typography variant="caption">
              © Parkify {new Date().getFullYear()}
            </Typography>
          </Box>
          
        </FooterContent>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
