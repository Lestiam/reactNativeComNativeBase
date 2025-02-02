import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base'
import { TouchableOpacity } from 'react-native'
import Logo from './assets/Logo.png'
import { Titulo } from './componentes/Titulo'
import { EntradaTexto } from './componentes/EntradaTexto';
import { Botao } from './componentes/Botao';

export default function Login() {
    return(
        <VStack flex={1} alignItems="center" p={5} justifyContent="center">
            <Image source={Logo} alt="Logo Voll" />

            <Titulo color="gray.500" /*todas as propriedades que eu colocar serão passadas pelo ...rest dentro do meu componente*/>
              Faça login em sua conta
            </Titulo>
            <Box>
              <EntradaTexto
                label='Email'
                placeHolder='Insira seu endereço de e-mail'
              />
              <EntradaTexto
                label='Senha'
                placeHolder='Insira sua senha'
              />
            </Box>
            <Botao>Entrar</Botao>

            <Link href='https://www.alura.com.br' mt={2}>
              Esqueceu sua senha?
            </Link>

            <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
              <Text>Ainda não tem cadastro? </Text>
              <TouchableOpacity>
                <Text color="blue.500">Faça seu cadastro!</Text>
              </TouchableOpacity>
            </Box>
        </VStack>
    );
}

