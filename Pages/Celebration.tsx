import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";
import { ItemListInterface } from "../components/ItemList";
import { View, Text, BackHandler, Animated, Easing } from "react-native";

interface Celebration extends ItemListInterface {}

const Celebration: React.FC<Celebration> = ({ name }) => {
  const position = useRef(new Animated.Value(-100)).current;
  const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);
  useEffect(() => {
    Animated.timing(position, {
      toValue: 20,
      duration: 7000,
      easing: Easing.ease,
    }).start();
  });
  return (
    <View
      style={{ height: "100%", alignItems: "center", justifyContent: "center" }}
    >
      <Animated.View
        style={{
          position: "absolute",
          bottom: position.interpolate({
            inputRange: [-100, -40],
            outputRange: [-100, 20],
          }),
          left: position.interpolate({
            inputRange: [-100, -50, 20],
            outputRange: [-100, 20, 450],
          }),
          transform: [
            {
              rotate: position.interpolate({
                inputRange: [-100, 20],
                outputRange: [-5, 4],
              }),
            },
          ],
        }}
      >
        <AnimatedLottieView
          style={{
            height: 150,
            width: position,
            backgroundColor: "#ffffff00",
          }}
          autoSize
          autoPlay
          loop
          resizeMode="cover"
          speed={5}
          source={require("../assets/drumm.json")}
        />
      </Animated.View>
      <Animated.View
        style={{
          position: "absolute",
          bottom: position.interpolate({
            inputRange: [-100, -40],
            outputRange: [-100, 20],
          }),
          right: position.interpolate({
            inputRange: [-100, -50, 20],
            outputRange: [-100, 20, 450],
          }),
          transform: [
            {
              rotate: position.interpolate({
                inputRange: [-100, 20],
                outputRange: [4, -2],
              }),
            },
          ],
        }}
      >
        <AnimatedLottieView
          style={{
            height: 150,
            width: position,
            backgroundColor: "#ffffff00",
          }}
          autoSize
          autoPlay
          loop
          resizeMode="cover"
          speed={5}
          source={require("../assets/drumm.json")}
        />
      </Animated.View>

      <AnimatedLottieView
        style={{
          width: 500,
          height: 500,
          position: "absolute",
          right: 0,
          top: 0,
          backgroundColor: "#ffffff00",
        }}
        autoPlay
        loop
        autoSize
        resizeMode="cover"
        source={require("../assets/fireworks.json")}
      />
      <AnimatedLottieView
        style={{
          width: 400,
          height: 400,
          position: "absolute",
          right: 0,
          top: 0,
          backgroundColor: "#ffffff00",
        }}
        autoPlay
        loop
        autoSize
        resizeMode="cover"
        source={require("../assets/fireworks.json")}
      />
      <Animated.View
        style={{
          width: position.interpolate({
            inputRange: [-100, 20],
            outputRange: [30, 400],
          }),
          height: position.interpolate({
            inputRange: [-100, 20],
            outputRange: [30, 400],
          }),
        }}
      >
        <AnimatedLottieView
          style={{
            position: "absolute",
            backgroundColor: "#ffffff00",
            width: "100%",
            height: "100%",
          }}
          autoPlay
          speed={0.7}
          loop
          autoSize
          resizeMode="cover"
          source={require("../assets/heartbeat.json")}
        />
      </Animated.View>
    </View>
  );
};

export default Celebration;
