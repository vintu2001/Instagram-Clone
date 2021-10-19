import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";

const SignupForm = () => {
  const navigation = useNavigation();
  const SignupFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An Email Is Required"),
    username: Yup.string().required().min(2, "A username is required"),
    password: Yup.string()
      .required()
      .min(8, "Your password has to have atleast 8 characters"),
  });
  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", username: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
          // navigation.navigate("HomeScreen");
        }}
        validationSchema={SignupFormSchema}
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
                  placeholder="Email"
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
                      1 > values.username.length || values.username.length >= 2
                        ? "#ccc"
                        : "red",
                  },
                ]}
              >
                <TextInput
                  placeholder="Username"
                  placeholderTextColor="#444"
                  autoCapitalize="none"
                  textContentType="username"
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                  value={values.username}
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
              <Pressable style={styles.button(isValid)} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </Pressable>

              <View style={styles.loginContainer}>
                <Text style={{ color: "white" }}>Already have an account?</Text>
                <TouchableOpacity
                  onPress={() => navigation.goBack("LoginScreen")}
                >
                  <Text style={{ color: "#6BB0F5", marginLeft: 5 }}>
                    Log In
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
    padding: 9,
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
    marginTop: 50,
  }),
  buttonText: {
    fontWeight: "700",
    color: "#fff",
    fontSize: 20,
  },
  loginContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 30,
  },
});

export default SignupForm;
