import React, { useEffect, useRef, useState } from "react";
import LottieView from "lottie-react-native";
import { ItemListInterface } from "../components/ItemList";
import { View, Animated, Easing, ImageBackground } from "react-native";
import {
  useRoute,
  useNavigation,
  CompositeNavigationProp,
} from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

const Celebration: React.FC<any> = (props) => {
  const position = useRef(new Animated.Value(-100)).current;
  const secondTime = useRef(new Animated.Value(0)).current;
  const [explode, setExplode] = useState(false);
  const route = useRoute<any>();
  const { img, name } = route.params;
  const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);
  useEffect(() => {
    setTimeout(() => setExplode(true), 8000);
    Animated.timing(position, {
      toValue: 20,
      duration: 7000,
      easing: Easing.ease,
    }).start();
    Animated.timing(secondTime, {
      toValue: 900,
      duration: 1000,
      delay: 7000,
    }).start();
  });
  return (
    <View
      style={{
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Animated.View
        style={{
          width: "100%",
          height: "50%",
          position: "absolute",
          zIndex: 10,
        }}
      >
        {explode && (
          <AnimatedLottieView
            style={{
              backgroundColor: "#ffffff00",
            }}
            autoSize
            autoPlay
            resizeMode="cover"
            source={require("../assets/explosion.json")}
          />
        )}
      </Animated.View>
      <Animated.View
        style={{
          width: "100%",
          height: "50%",
          position: "absolute",
          top: secondTime.interpolate({
            inputRange: [0, 900],

            outputRange: [1500, 160],
          }),
        }}
      >
        <ImageBackground
          source={{ uri: img }}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
          }}
        ></ImageBackground>
      </Animated.View>
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
      <Animated.View
        style={{
          width: 500,
          height: 500,
          position: "absolute",
          left: secondTime.interpolate({
            inputRange: [0, 900],
            outputRange: [900, 0],
          }),
        }}
      >
        <AnimatedLottieView
          style={{
            bottom: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#ffffff00",
          }}
          autoPlay
          speed={2}
          loop
          autoSize
          resizeMode="cover"
          source={require("../assets/fireworks.json")}
        />
      </Animated.View>
      <Animated.View
        style={{
          width: 200,
          height: 200,
          position: "absolute",
          top: 0,
          right: secondTime.interpolate({
            inputRange: [0, 900],
            outputRange: [900, 100],
          }),
        }}
      >
        <AnimatedLottieView
          style={{
            width: "100%",
            height: "100%",
            top: 0,
            backgroundColor: "#ffffff00",
          }}
          autoPlay
          loop
          speed={3}
          autoSize
          resizeMode="cover"
          source={require("../assets/fireworks.json")}
        />
      </Animated.View>
      <Animated.View
        style={{
          width: 200,
          height: 200,
          position: "absolute",
          top: 100,
          right: secondTime.interpolate({
            inputRange: [0, 900],
            outputRange: [900, 200],
          }),
        }}
      >
        <AnimatedLottieView
          style={{
            width: "100%",
            height: "100%",
            top: 0,
            backgroundColor: "#ffffff00",
          }}
          autoPlay
          loop
          autoSize
          speed={2}
          resizeMode="cover"
          source={require("../assets/fireworks.json")}
        />
      </Animated.View>
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
          marginTop: secondTime,
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
