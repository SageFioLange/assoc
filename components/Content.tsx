import React from "react";
import { Image, StyleProp, ImageStyle, Text, Platform } from "react-native";
import { Video } from "expo-av";
import VideoPlayer from "expo-video-player";
import { accentBlue, styles, width } from "../utils/styles";
import MapView, { Marker } from "react-native-maps";
import openMaps from "react-native-open-maps";
import { useAppSelector } from "../utils/reduxHooks";

export default function Content({
  content,
  style,
  poster,
}: {
  content: ContentData;
  style?: StyleProp<ImageStyle>;
  poster?: boolean;
}): JSX.Element {
  const autoPlayVideos = useAppSelector(
    (state) => state.settings.autoPlayVideos
  );
  if (content.image) {
    return (
      <Image
        source={{ uri: content.image.uri, cache: "force-cache" }}
        style={[styles.image, style]}
        // Scale width and height down slightly so that the image
        // doesn't draw over any of the borders
        width={
          content.image.w >= content.image.h
            ? width * 0.99
            : (width * 0.99 * content.image.w) / content.image.h
        }
        height={
          content.image.w < content.image.h
            ? width * 0.99
            : (width * 0.99 * content.image.h) / content.image.w
        }
      />
    );
  }
  if (content.video) {
    return poster ? (
      <Image
        source={{ uri: content.video.posterUri, cache: "force-cache" }}
        style={[styles.image, style]}
        // Scale width and height down slightly so that the image
        // doesn't draw over any of the borders
        width={
          content.video.w >= content.video.h
            ? width * 0.99
            : (width * 0.99 * content.video.w) / content.video.h
        }
        height={
          content.video.w < content.video.h
            ? width * 0.99
            : (width * 0.99 * content.video.h) / content.video.w
        }
      />
    ) : (
      <VideoPlayer
        videoProps={{
          shouldPlay: autoPlayVideos,
          resizeMode: Video.RESIZE_MODE_CONTAIN,
          posterSource: {
            uri: content.video.posterUri,
          },
          source: {
            uri: content.video.videoUri,
          },
        }}
        showFullscreenButton={false}
        width={
          content.video.w >= content.video.h
            ? width * 0.99
            : (width * 0.99 * content.video.w) / content.video.h
        }
        height={
          content.video.w < content.video.h
            ? width * 0.99
            : (width * 0.99 * content.video.h) / content.video.w
        }
      />
    );
  }
  if (content.map) {
    return (
      <MapView
        style={[
          {
            width: width * 0.99,
            height: width * 0.99,
          },
          style,
        ]}
        initialRegion={{
          latitude: content.map.latitude,
          longitude: content.map.longitude,
          latitudeDelta: content.map.viewDelta,
          longitudeDelta: content.map.viewDelta,
        }}
        showsMyLocationButton={false}
        showsPointsOfInterest={false}
        showsCompass={false}
        onLongPress={() =>
          openMaps({
            latitude: content.map?.latitude,
            longitude: content.map?.longitude,
            provider: Platform.OS === "ios" ? "apple" : "google",
          })
        }
        scrollEnabled={false}
        zoomEnabled={!poster}
        rotateEnabled={!poster}
        pitchEnabled={!poster}
      >
        <Marker
          coordinate={{
            latitude: content.map.latitude,
            longitude: content.map.longitude,
          }}
          pinColor={accentBlue}
        />
      </MapView>
    );
  }
  return <Text>Error loading content</Text>;
}
