import React, { useContext } from "react";

import AppleSvg from "../../assets/apple.svg";
import GoogleSvg from "../../assets/google.svg";
import LogoSvg from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";

import { AuthContext } from '../../AuthContext';

import { SignInSocialButton } from '../../components/SignInSocialButton';

import { 
  Container, 
  Header, 
  TitleWrapper, 
  Title, 
  SignInTitle, 
  Footer 
} from "./styles";

export function SignIn() {
  const data = useContext(AuthContext);

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg 
            width={RFValue(120)}
            height={RFValue(68)}
          />
          <Title>
            Controle suas {"\n"}
            finanças de forma {"\n"}
            muito simples 
          </Title>
        </TitleWrapper>
        <SignInTitle>
          Faça seu login com {"\n"}
          uma das contas abaixo 
        </SignInTitle>
      </Header>

      <Footer>
        <SignInSocialButton
          title="Entrar com Google"
          svg={GoogleSvg}
          //onPress={handleSignInWithGoogle}
        />

        <SignInSocialButton
          title="Entrar com Apple"
          svg={AppleSvg}
          //onPress={handleSignInWithApple}
        />
      </Footer>
    </Container>
  )
}