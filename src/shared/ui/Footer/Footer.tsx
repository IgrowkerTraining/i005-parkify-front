import { Container, Typography } from "@mui/material";
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
    <FooterWrapper component="footer" id="siguenos">
      <Container maxWidth="sm">
        <FooterContent>
          <LogoImage src={logoParkify} alt="Logo de Parkify" />

          <SocialIcons>
            <SocialButton href="#" aria-label="X">
              <img src={twitterLogo} alt="X" width={24} height={24} />
            </SocialButton>
            <SocialButton href="#" aria-label="Instagram">
              <Instagram />
            </SocialButton>
            <SocialButton href="#" aria-label="YouTube">
              <YouTube />
            </SocialButton>
            <SocialButton href="#" aria-label="LinkedIn">
              <LinkedIn />
            </SocialButton>
          </SocialIcons>

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
        </FooterContent>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
