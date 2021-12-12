import React, { useContext } from "react";
import { useFonts, Montserrat_600SemiBold, Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import { View, Text, TextInput, Pressable } from "react-native";
import { useForm, Controller} from "react-hook-form";

import { styles } from './styles'
import AppLoading from "expo-app-loading";
import { LoginScreenButtons } from "../LoginScreenButtons";
import { AuthContext, UserType } from "../../context/authContexts";

type FormData = {
  email: string;
  password: string;
}

type UserProps= {
  user: string | {};
  setUser: () => void | {};
}


const LoginScreenTextFields: React.FC = () => {
  const {control, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: ""
    }
  });
  const {user, setUser} = useContext(AuthContext)
  console.warn(user)
  const writeResult = (result: UserType) => setUser(result)
  let [fontsLoaded, error] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_500Medium
  })
  if(!fontsLoaded) {
    return <AppLoading />
  }
  return(
    <View style={styles.inputWrapper}>
      <Text style={[styles.label, {fontFamily: "Montserrat_500Medium"}]}>Digite o seu e-mail</Text>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      {errors.email && <Text>Digite um Email Valido </Text>}
        
      <Text style={[styles.label, {fontFamily: "Montserrat_500Medium", marginLeft: -13}]}>Digite sua Senha</Text>
      <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            secureTextEntry={true}
            style={styles.inputPassword}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      <View style={{marginTop: 26}}>
        <LoginScreenButtons style={{marginBottom: 18}} title="Entrar" onPress={handleSubmit(writeResult)}/>
        <LoginScreenButtons title="Registrar"/>
      </View>
      <Pressable onPress={() => console.warn('clico')} style={{ padding: 5}}>
        <Text style={[styles.forgottenText, {fontFamily: "Montserrat_500Medium"}]}>Esqueceu a sua senha?</Text>
      </Pressable>
    </View>
  )
}

export { LoginScreenTextFields }