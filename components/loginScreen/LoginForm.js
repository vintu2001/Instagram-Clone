import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";

import firebase from "../../firebase";

import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";

const LoginForm = () => {
  const navigation = useNavigation();
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An Email Is Required"),
    password: Yup.string()
      .required()
      .min(8, "Your password has to have atleast 8 characters"),
  });
  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
          // navigation.navigate("HomeScreen");
        }}
        validationSchema={LoginFormSchema}
        validateOnMount={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => {
          return (
            <>
              <View
                style={[
                  styles.inputField,
                  {
                    borderColor:
                      values.email.length < 1 ||
                      Validator.validate(values.email)
                        ? "#ccc"
                        : "red",
                  },
                ]}
              >
                <TextInput
                  placeholder="Phone number, username or email"
                  placeholderTextColor="#444"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  // autoFocus={true}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
              </View>
              <View
                style={[
                  styles.inputField,
                  {
                    borderColor:
                      1 > values.password.length || values.password.length >= 8
                        ? "#ccc"
                        : "red",
                  },
                ]}
              >
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="#444"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={true}
                  textContentType="password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                />
              </View>
              <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
                <Text style={{ color: "#6BB0F5" }}>Forgot Password?</Text>
              </View>
              <Pressable style={styles.button(isValid)} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Log In</Text>
              </Pressable>

              <View style={styles.signupContainer}>
                <Text style={{ color: "white" }}>Don't have an account?</Text>
                <TouchableOpacity
                  onPress={() => navigation.push("SignupScreen")}
                >
                  <Text style={{ color: "#6BB0F5", marginLeft: 5 }}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          );
        }}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 60,
  },
  inputField: {
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#FAFAFA",
    marginBottom: 10,
    borderWidth: 1.5,
  },
  button: (isValid) => ({
    backgroundColor: isValid ? "#0096F6" : "#9ACAF7",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 5,
  }),
  buttonText: {
    fontWeight: "700",
    color: "#fff",
    fontSize: 20,
  },
  signupContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 50,
  },
});

export default LoginForm;
