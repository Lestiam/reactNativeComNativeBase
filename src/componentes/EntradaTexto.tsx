import { Input, FormControl } from "native-base";

interface InputProps {
    label?: string;
    placeHolder: string;
    secureTextEntry?: boolean;
    leftIcon?: React.ReactNode;
}

export function EntradaTexto({label, placeHolder, secureTextEntry = false}: InputProps) : JSX.Element {
    return (
        <FormControl mt={3}>
            {label && <FormControl.Label>{label}</FormControl.Label>}
                <Input 
                  placeholder={placeHolder}
                  size='lg'
                  w="100%"
                  borderRadius='lg'
                  bgColor="gray.100"
                  secureTextEntry={secureTextEntry}
                  shadow={3}
                />
              </FormControl>
    );
}