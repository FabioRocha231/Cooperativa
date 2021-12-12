import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputWrapper: {
    alignItems: 'center',
    marginTop: 30,
  },
  input: {
    width: 256,
    height: 40,
    color: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#FFFFFF",
    borderRadius: 5,
    marginBottom: 12,
    paddingLeft: 10,
  },
  inputPassword: {
    width: 256,
    height:  40,
    color: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#FFFFFF",
    borderRadius: 5,
    paddingLeft: 10,
  },
  label: {
    marginRight: 125,
    marginBottom: 10,
    fontSize: 12,
    color: "#FFFFFF"
  },
  forgottenText: {
    color: "#FFFFFF",
    fontSize: 8,
    marginTop: 5
  }
})

export { styles }