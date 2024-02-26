import {
  Backdrop,
  Button,
  Checkbox,
  CircularProgress,
  Divider,
  TextField,
} from "@mui/material";
import DownloadImage from "../assets/images/download.png";
import React, {
  ChangeEventHandler,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import { Root } from "../extras/types";
import { ColorContext } from "../extras/ColorContext";
import FeatureIntro from "../components/FeatureIntro";

const API_BASE_URL = `https://appnor-backend.onrender.com/extras/v1/api/youtube/facebook-video-download?videoUrl=`;
var static_video_url = "";

const sampleResponse: Root = {
  message: "success",
  url: "https://www.facebook.com/share/r/euncZGFVjpQZJ12v/?mibextid=roAVj8",
  info: {
    developer: "@Alia Uhuy",
    status: true,
    data: [
      {
        resolution: "720p (HD)",
        thumbnail:
          "https://scontent-ber1-1.xx.fbcdn.net/v/t15.5256-10/384549483_879062817257915_8132609418417021492_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=dd673f&_nc_ohc=ZwXkw3_YmToAX8lZxqI&_nc_ht=scontent-ber1-1.xx&oh=00_AfB3FhBApylgD38n3HWLIRMPio0bdMzNcCFEUpjWuVOh2A&oe=659F62E1",
        url: "https://video-ber1-1.xx.fbcdn.net/o1/v/t2/f1/m69/GEA6eBdOZca95nIEAAcEW_Sh_TcTbmdjAAAF.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ht=video-ber1-1.xx.fbcdn.net&_nc_cat=101&strext=1&vs=a3eb1d98886a33da&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HRUE2ZUJkT1pjYTk1bklFQUFjRVdfU2hfVGNUYm1kakFBQUYVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dLRVpoaGRPU3Npb2NvVUNBRkMzWElCZWQwSTlidjRHQUFBRhUCAsgBAEsHiBJwcm9ncmVzc2l2ZV9yZWNpcGUBMQ1zdWJzYW1wbGVfZnBzABB2bWFmX2VuYWJsZV9uc3ViACBtZWFzdXJlX29yaWdpbmFsX3Jlc29sdXRpb25fc3NpbQAoY29tcHV0ZV9zc2ltX29ubHlfYXRfb3JpZ2luYWxfcmVzb2x1dGlvbgAddXNlX2xhbmN6b3NfZm9yX3ZxbV91cHNjYWxpbmcAEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcjBdAAAAAAAAAABERAAAAJqzf6ey8uZ8BFQIoAkMyGAt2dHNfcHJldmlldxwXQDVdsi0OVgQYIWRhc2hfZ2VuMmh3YmFzaWNfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2Q4ElZJREVPX1ZJRVdfUkVRVUVTVBsKiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMBMAxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50BDQxNTURb2VtX2lzX2V4cGVyaW1lbnQADG9lbV92aWRlb19pZBAxNzI4MjIwNDU3Njc5NzY5Em9lbV92aWRlb19hc3NldF9pZA84NzA5MzAxMTQ1NjA2NTQVb2VtX3ZpZGVvX3Jlc291cmNlX2lkDzM1MDYzMjExNzM1MjQwNhxvZW1fc291cmNlX3ZpZGVvX2VuY29kaW5nX2lkDzE0NDM4NTIzNTM5NzgxMg52dHNfcmVxdWVzdF9pZAAlAhwAJcQBGweIAXMEMTYxMQJjZAoyMDIzLTEwLTIxA3JjYgQ0MTAwA2FwcBRGYWNlYm9vayBmb3IgQW5kcm9pZAJjdA5GQl9TSE9SVFNfUE9TVBNvcmlnaW5hbF9kdXJhdGlvbl9zBjIxLjM2NwJ0cxVwcm9ncmVzc2l2ZV9lbmNvZGluZ3MA&ccb=9-4&oh=00_AfC1kPrLru3_N7DjE_YF8ivaV3qNciz9EkkvM44756jOPw&oe=659C0EB3&_nc_sid=1d576d&_nc_rid=498418947052709&_nc_store_type=1&dl=1",
        shouldRender: false,
      },
      {
        resolution: "360p (SD)",
        thumbnail:
          "https://scontent-ber1-1.xx.fbcdn.net/v/t15.5256-10/384549483_879062817257915_8132609418417021492_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=dd673f&_nc_ohc=ZwXkw3_YmToAX8lZxqI&_nc_ht=scontent-ber1-1.xx&oh=00_AfB3FhBApylgD38n3HWLIRMPio0bdMzNcCFEUpjWuVOh2A&oe=659F62E1",
        url: "https://video-ber1-1.xx.fbcdn.net/v/t42.1790-2/393132035_1424789148251385_2497064395464821269_n.mp4?_nc_cat=111&ccb=1-7&_nc_sid=55d0d3&efg=eyJybHIiOjcyNywicmxhIjo1MTIsInZlbmNvZGVfdGFnIjoic3ZlX3NkIn0%3D&_nc_ohc=ZZBuRuQkY-4AX9YIs16&rl=727&vabr=404&_nc_ht=video-ber1-1.xx&oh=00_AfD3NHrV9N_RpVLQ_UGNszVjdFtKR_QbsNi8QVXN_9NCtQ&oe=65A0535D&dl=1",
        shouldRender: false,
      },
      {
        resolution: "240p",
        thumbnail:
          "https://scontent-ber1-1.xx.fbcdn.net/v/t15.5256-10/384549483_879062817257915_8132609418417021492_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=dd673f&_nc_ohc=ZwXkw3_YmToAX8lZxqI&_nc_ht=scontent-ber1-1.xx&oh=00_AfB3FhBApylgD38n3HWLIRMPio0bdMzNcCFEUpjWuVOh2A&oe=659F62E1",
        url: "/render.php?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aWRlb191cmwiOiJodHRwczovL3ZpZGVvLWJlcjEtMS54eC5mYmNkbi5uZXQvdi90MzkuMjU0NDctMi80MDQzOTk2MDlfMzUxOTM4ODI0MTU0MTE5XzU3Nzc5MDc0Mjc5OTEwNjYzNTlfbi5tcDQ_X25jX2NhdD0xMTAmY2NiPTEtNyZfbmNfc2lkPTlhNWQ1MCZlZmc9ZXlKMlpXNWpiMlJsWDNSaFp5STZJbVJoYzJoZmNqSmZkbkE1WDJkbGJqRmhkbU5mY1Rjd1gyWnlZV2RmTWw5MmFXUmxieUo5Jl9uY19vaGM9V2V1cjVGbm9IbG9BWDliYldTQSZfbmNfaHQ9dmlkZW8tYmVyMS0xLnh4Jm9oPTAwX0FmQUFVYU92SDZUaHNUUWJ0bFBFXzE4TzFCQkpjYXBNRVRlelNvTGo4MTJPS2cmb2U9NjU5RUJBOUMiLCJhdWRpb191cmwiOiJodHRwczovL3ZpZGVvLWJlcjEtMS54eC5mYmNkbi5uZXQvdi90MzkuMjU0NDctMi8zOTQwNTA1ODdfNjUzNDkyNTk2OTE4MzcwXzI2NzEwMDEyODc5NTU1ODA5MDlfbi5tcDQ_X25jX2NhdD0xMDImY2NiPTEtNyZfbmNfc2lkPTlhNWQ1MCZlZmc9ZXlKMlpXNWpiMlJsWDNSaFp5STZJbVJoYzJoZllYVmthVzlmWVdGamNGODJORjltYm05eWJURTBYMlp5WVdkZk1sOWhkV1JwYnlKOSZfbmNfb2hjPURabGlhc2JGUFJ3QVg5czR0YXEmX25jX2h0PXZpZGVvLWJlcjEtMS54eCZvaD0wMF9BZkRGa3FUQTlRTzZsN2JoMW10Q3VraXAtWHg5Z3laMmRHTnB3UEtsdW9JZVhBJm9lPTY1OUY2MzIxIiwiaWQiOm51bGwsImZpbGVuYW1lIjoiU25hcFNhdmVfQXBwX18yNDBwLm1wNCJ9.y5-SbfggqjiHc9IV9pwui6vWAVOvLQCJQfeC7OHdNKM",
        shouldRender: true,
      },
      {
        resolution: "180p",
        thumbnail:
          "https://scontent-ber1-1.xx.fbcdn.net/v/t15.5256-10/384549483_879062817257915_8132609418417021492_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=dd673f&_nc_ohc=ZwXkw3_YmToAX8lZxqI&_nc_ht=scontent-ber1-1.xx&oh=00_AfB3FhBApylgD38n3HWLIRMPio0bdMzNcCFEUpjWuVOh2A&oe=659F62E1",
        url: "/render.php?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aWRlb191cmwiOiJodHRwczovL3ZpZGVvLWJlcjEtMS54eC5mYmNkbi5uZXQvdi90MzkuMjU0NDctMi80MDQyNzA5MTJfODg0ODkyOTYzMjQ3NjA1XzU5MTQ0NjE4MjY5NTg0NzczMzhfbi5tcDQ_X25jX2NhdD0xMDUmY2NiPTEtNyZfbmNfc2lkPTlhNWQ1MCZlZmc9ZXlKMlpXNWpiMlJsWDNSaFp5STZJbVJoYzJoZmNqSmZkbkE1WDJkbGJqRmhkbU5mY1Rnd1gyWnlZV2RmTWw5MmFXUmxieUo5Jl9uY19vaGM9dXBKRnQ5NjVZeFFBWDg0R2NobiZfbmNfaHQ9dmlkZW8tYmVyMS0xLnh4Jm9oPTAwX0FmQVQ1ZlNoZERLazFCSF93cFhMVzdWSTBYcTBWV0RKbzdmaGtfRVhTSmtQbkEmb2U9NjU5RjRERDEiLCJhdWRpb191cmwiOiJodHRwczovL3ZpZGVvLWJlcjEtMS54eC5mYmNkbi5uZXQvdi90MzkuMjU0NDctMi8zOTQwNTA1ODdfNjUzNDkyNTk2OTE4MzcwXzI2NzEwMDEyODc5NTU1ODA5MDlfbi5tcDQ_X25jX2NhdD0xMDImY2NiPTEtNyZfbmNfc2lkPTlhNWQ1MCZlZmc9ZXlKMlpXNWpiMlJsWDNSaFp5STZJbVJoYzJoZllYVmthVzlmWVdGamNGODJORjltYm05eWJURTBYMlp5WVdkZk1sOWhkV1JwYnlKOSZfbmNfb2hjPURabGlhc2JGUFJ3QVg5czR0YXEmX25jX2h0PXZpZGVvLWJlcjEtMS54eCZvaD0wMF9BZkRGa3FUQTlRTzZsN2JoMW10Q3VraXAtWHg5Z3laMmRHTnB3UEtsdW9JZVhBJm9lPTY1OUY2MzIxIiwiaWQiOm51bGwsImZpbGVuYW1lIjoiU25hcFNhdmVfQXBwX18xODBwLm1wNCJ9.Rh5CgfYSpAYrwxjF_M5bo06R53eYkLmmr_pOdtsErgQ",
        shouldRender: true,
      },
      {
        resolution: "72p",
        thumbnail:
          "https://scontent-ber1-1.xx.fbcdn.net/v/t15.5256-10/384549483_879062817257915_8132609418417021492_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=dd673f&_nc_ohc=ZwXkw3_YmToAX8lZxqI&_nc_ht=scontent-ber1-1.xx&oh=00_AfB3FhBApylgD38n3HWLIRMPio0bdMzNcCFEUpjWuVOh2A&oe=659F62E1",
        url: "/render.php?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aWRlb191cmwiOiJodHRwczovL3ZpZGVvLWJlcjEtMS54eC5mYmNkbi5uZXQvdi90MzkuMjU0NDctMi80MDQ4MDMyOTBfMTMwNDA4NjQ3Njk1NjY2M18xNzY5MjcwODUyNTgwODM5NTcwX24ubXA0P19uY19jYXQ9MTA5JmNjYj0xLTcmX25jX3NpZD05YTVkNTAmZWZnPWV5SjJaVzVqYjJSbFgzUmhaeUk2SW1SaGMyaGZjakpmZG5BNVgyZGxiakZoZG1OZmNUUXdYMlp5WVdkZk1sOTJhV1JsYnlKOSZfbmNfb2hjPVdSN3VsWUlVdVdVQVgtVU9KWTcmX25jX2h0PXZpZGVvLWJlcjEtMS54eCZvaD0wMF9BZkNsTmF0Q2FxWExZNGJ0WTNYc2J0ZHBDQmhFZWtVQ1loR0RBSW5wYkE1S2d3Jm9lPTY1OUU1RkEyIiwiYXVkaW9fdXJsIjoiaHR0cHM6Ly92aWRlby1iZXIxLTEueHguZmJjZG4ubmV0L3YvdDM5LjI1NDQ3LTIvMzk0MDUwNTg3XzY1MzQ5MjU5NjkxODM3MF8yNjcxMDAxMjg3OTU1NTgwOTA5X24ubXA0P19uY19jYXQ9MTAyJmNjYj0xLTcmX25jX3NpZD05YTVkNTAmZWZnPWV5SjJaVzVqYjJSbFgzUmhaeUk2SW1SaGMyaGZZWFZrYVc5ZllXRmpjRjgyTkY5bWJtOXliVEUwWDJaeVlXZGZNbDloZFdScGJ5SjkmX25jX29oYz1EWmxpYXNiRlBSd0FYOXM0dGFxJl9uY19odD12aWRlby1iZXIxLTEueHgmb2g9MDBfQWZERmtxVEE5UU82bDdiaDFtdEN1a2lwLVh4OWd5WjJkR05wd1BLbHVvSWVYQSZvZT02NTlGNjMyMSIsImlkIjpudWxsLCJmaWxlbmFtZSI6IlNuYXBTYXZlX0FwcF9fNzJwLm1wNCJ9.sT4xVp0sHV10FnhA2GxG2gGkMoK7wXRl-fb_pC1uHxw",
        shouldRender: true,
      },
      {
        resolution: "108p",
        thumbnail:
          "https://scontent-ber1-1.xx.fbcdn.net/v/t15.5256-10/384549483_879062817257915_8132609418417021492_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=dd673f&_nc_ohc=ZwXkw3_YmToAX8lZxqI&_nc_ht=scontent-ber1-1.xx&oh=00_AfB3FhBApylgD38n3HWLIRMPio0bdMzNcCFEUpjWuVOh2A&oe=659F62E1",
        url: "/render.php?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aWRlb191cmwiOiJodHRwczovL3ZpZGVvLWJlcjEtMS54eC5mYmNkbi5uZXQvdi90MzkuMjU0NDctMi80MDM1OTk2OTlfMzYyODQ1ODE2MjQwNDczXzgwNDA3OTQwMjI1MDc3OTk4MjBfbi5tcDQ_X25jX2NhdD0xMDgmY2NiPTEtNyZfbmNfc2lkPTlhNWQ1MCZlZmc9ZXlKMlpXNWpiMlJsWDNSaFp5STZJbVJoYzJoZmNqSmZkbkE1WDJkbGJqRmhkbU5mY1RVd1gyWnlZV2RmTWw5MmFXUmxieUo5Jl9uY19vaGM9eC1SVGZjT1FHMHdBWDktV3JqOSZfbmNfaHQ9dmlkZW8tYmVyMS0xLnh4Jm9oPTAwX0FmQ3NvaXZ5dzl6OTJJMHdHTzlDODZ4Qi1tVlNDVkRKcTgwRjNGd3lzZkpnRmcmb2U9NjU5RkIzQTgiLCJhdWRpb191cmwiOiJodHRwczovL3ZpZGVvLWJlcjEtMS54eC5mYmNkbi5uZXQvdi90MzkuMjU0NDctMi8zOTQwNTA1ODdfNjUzNDkyNTk2OTE4MzcwXzI2NzEwMDEyODc5NTU1ODA5MDlfbi5tcDQ_X25jX2NhdD0xMDImY2NiPTEtNyZfbmNfc2lkPTlhNWQ1MCZlZmc9ZXlKMlpXNWpiMlJsWDNSaFp5STZJbVJoYzJoZllYVmthVzlmWVdGamNGODJORjltYm05eWJURTBYMlp5WVdkZk1sOWhkV1JwYnlKOSZfbmNfb2hjPURabGlhc2JGUFJ3QVg5czR0YXEmX25jX2h0PXZpZGVvLWJlcjEtMS54eCZvaD0wMF9BZkRGa3FUQTlRTzZsN2JoMW10Q3VraXAtWHg5Z3laMmRHTnB3UEtsdW9JZVhBJm9lPTY1OUY2MzIxIiwiaWQiOm51bGwsImZpbGVuYW1lIjoiU25hcFNhdmVfQXBwX18xMDhwLm1wNCJ9.-2rHDvchNO_rfwBu2dlm1RpYsFUwnLIzotc--24m1K0",
        shouldRender: true,
      },
      {
        resolution: "144p",
        thumbnail:
          "https://scontent-ber1-1.xx.fbcdn.net/v/t15.5256-10/384549483_879062817257915_8132609418417021492_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=dd673f&_nc_ohc=ZwXkw3_YmToAX8lZxqI&_nc_ht=scontent-ber1-1.xx&oh=00_AfB3FhBApylgD38n3HWLIRMPio0bdMzNcCFEUpjWuVOh2A&oe=659F62E1",
        url: "/render.php?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aWRlb191cmwiOiJodHRwczovL3ZpZGVvLWJlcjEtMS54eC5mYmNkbi5uZXQvdi90MzkuMjU0NDctMi80MDM2MTI4MDFfMTU1NDU4NjY5ODYyODQwMV84OTA4NzAwNTE1OTUzMTY5MDM5X24ubXA0P19uY19jYXQ9MTA2JmNjYj0xLTcmX25jX3NpZD05YTVkNTAmZWZnPWV5SjJaVzVqYjJSbFgzUmhaeUk2SW1SaGMyaGZjakpmZG5BNVgyZGxiakZoZG1OZmNUWXdYMlp5WVdkZk1sOTJhV1JsYnlKOSZfbmNfb2hjPWZRWUtYRWtyby1BQVg5dUpfYjMmX25jX2h0PXZpZGVvLWJlcjEtMS54eCZvaD0wMF9BZkQ4VWRnMWgxRkZSWjItY29QYTRpa0RRRmJ1NVlJV1IyNGlWWG93bU5HSnJBJm9lPTY1OUY0QkQxIiwiYXVkaW9fdXJsIjoiaHR0cHM6Ly92aWRlby1iZXIxLTEueHguZmJjZG4ubmV0L3YvdDM5LjI1NDQ3LTIvMzk0MDUwNTg3XzY1MzQ5MjU5NjkxODM3MF8yNjcxMDAxMjg3OTU1NTgwOTA5X24ubXA0P19uY19jYXQ9MTAyJmNjYj0xLTcmX25jX3NpZD05YTVkNTAmZWZnPWV5SjJaVzVqYjJSbFgzUmhaeUk2SW1SaGMyaGZZWFZrYVc5ZllXRmpjRjgyTkY5bWJtOXliVEUwWDJaeVlXZGZNbDloZFdScGJ5SjkmX25jX29oYz1EWmxpYXNiRlBSd0FYOXM0dGFxJl9uY19odD12aWRlby1iZXIxLTEueHgmb2g9MDBfQWZERmtxVEE5UU82bDdiaDFtdEN1a2lwLVh4OWd5WjJkR05wd1BLbHVvSWVYQSZvZT02NTlGNjMyMSIsImlkIjpudWxsLCJmaWxlbmFtZSI6IlNuYXBTYXZlX0FwcF9fMTQ0cC5tcDQifQ.cLfRUMwHPqUwgeOTNLDup2_3qzbb1McMu3qVTIAMXy0",
        shouldRender: true,
      },
    ],
  },
};

function HomePage(props: any) {
  const colorContex = useContext(ColorContext);
  const scrollRef = useRef<any>(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [inVideoUrl, setInVideoUrl] = useState("");
  const [audioResponse, setAudioResponse] = useState<Root>(sampleResponse);
  const [playVideo, setPlayVideo] = useState(false);
  const [isTermsAggred, setIsTermsAggred] = useState(true);
  const [isDownloadSuccess, setIsDownloadSuccess] = useState(false);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    scrollToDiv();
    return () => {};
  }, [colorContex.point]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): any {
    setVideoUrl(event.target.value);
    console.log(event.target.value);
    console.info(videoUrl);
    if (videoUrl !== "" || videoUrl.includes("youtu")) {
      //setPlayVideo(true);
    } else {
      setPlayVideo(false);
    }
  }

  function mimicDownload() {
    if (!isTermsAggred) {
      alert("Please Agree with our Terms & Condition before procedding..");
      return;
    }

    if (videoUrl === "" || !videoUrl.includes("facebook")) {
      alert("A Valid Facebook Video URL is Required!!");
      return;
    }

    handleOpen();
    setAudioResponse(sampleResponse);
    setIsDownloadSuccess(true);
    setPlayVideo(true);
    static_video_url = videoUrl;
    setInVideoUrl(audioResponse.info.data[0].url);
    setTimeout(() => {
      handleClose();
      setVideoUrl("");
    }, 5000);
  }

  function handleCheckboxChange(checked: boolean) {
    setIsTermsAggred(checked);
    //setPlayVideo(checked);
  }

  function handleUnavailableVideos(result: Root) {
    if (result.info.status === false || result.info.status === undefined) {
      alert(
        "This Facebook Video is private and can't be downloaded..Try with other video"
      );
      handleClose();
      return;
    }
  }

  function fetchDownloadableLink(): void {
    if (!isTermsAggred) {
      alert("Please Agree with our Terms & Condition before procedding..");
      return;
    }

    if (
      videoUrl === "" ||
      (!videoUrl.includes("facebook") && !videoUrl.includes("fb"))
    ) {
      alert("A Valid Facebook Video URL is Required!!");
      return;
    }
    handleOpen();
    axios.post<Root>(API_BASE_URL + videoUrl).then(
      (result) => {
        console.log("Hitting Facebook Download API is successful");
        if (
          result.data.info.status === false ||
          result.data.info.status === undefined
        ) {
          alert(
            "This Facebook Video is private and can't be downloaded..Try with other video"
          );
          handleClose();
          return;
        }
        setAudioResponse(result.data);
        setIsDownloadSuccess(true);
        setInVideoUrl(result.data.info.data[0].url);
        setPlayVideo(true);
        setTimeout(() => {
          handleClose();
          setVideoUrl("");
        }, 3000);
      },
      (error) => {
        console.log("Something went wrong while hitting data.." + error);
        handleClose();
        alert("Something went wrong while hitting data.." + error);
      }
    );
  }

  function handleVideoPlay(): any {
    if (inVideoUrl === "") {
      alert("You need to download first to play Facebook videos..");
      return;
    }
    if (videoUrl === "" || !videoUrl.includes("facebook")) {
      alert("A Valid Facebook Video URL is Required!!");
      return;
    }
    static_video_url = videoUrl;
    setPlayVideo(true);
  }

  function openLink(audioUrl: string): any {
    if (audioUrl === "" || audioUrl.length < 20) {
      alert("Something went wrong while generating download link, try again..");
      return;
    }
    window.open(audioUrl, "_blank");
  }

  function scrollToDiv() {
    if (colorContex.point !== 0) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
      colorContex.setPoint(0);
    }
  }

  const backdrop = (
    <React.Fragment>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <div className="flex flex-col items-center">
          <CircularProgress color="inherit" />
          <h1 className="font-extrabold m-2 text-white text-xl">
            Communicating with server...
          </h1>
        </div>
      </Backdrop>
    </React.Fragment>
  );

  return (
    <div
      ref={scrollRef}
      className="md:m-10 sm:m-5 flex flex-col items-center justify-center"
    >
      {backdrop}
      <FeatureIntro
        heading="Supercharged Facebook Shorts Downloader⚡️"
        desc="Imagine a world where your favorite online media is yours to keep, not just to stream. With our tool, that world is real! Download high-quality videos, audio, reels, and even thumbnails – all from a single link, completely FREE!"
        subheading="But it's not just about convenience – it's about freedom. Break free from limited playlists, buffering woes, and the ever-changing algorithms. Save your must-watch content for offline enjoyment. ➡️"
      />
      <div className="flex flex-col items-center border border-gray-500 shadow-lg p-4">
        <TextField
          fullWidth
          value={videoUrl}
          onChange={handleChange}
          id="url-input"
          label="Enter or Paste Facebook Video Link Here"
          variant="outlined"
        />
        <Button
          onClick={fetchDownloadableLink}
          sx={{ marginTop: "20px", marginBottom: "10px", width: "200px" }}
          variant="contained"
        >
          Download Video
        </Button>
        <Button
          onClick={handleVideoPlay}
          sx={{ width: "200px", marginTop: "10px", marginBottom: "15px" }}
          variant="outlined"
        >
          Play Video
        </Button>
        <h3 className="text-xs text-center w-80 m-2 p-2">
          A direct prompt to download video will get triggered if video has only
          one format else a list of downloadable video will get presented.
        </h3>
        <div className="flex items-center justify-center p-2">
          <Checkbox
            onChange={(e) => handleCheckboxChange(e.target.checked)}
            defaultChecked
          />
          <h3 className="text-xs text-center m-2">
            By downloading video you agree to our terms & conditions for fair
            usages policy
          </h3>
        </div>
        <Divider color="black" />
      </div>

      <br />
      <br />
      {isDownloadSuccess && (
        <div className="border-2 text-center border-blue-500 shadow-sm p-4">
          <div className="flex flex-col items-center md:flex-row font-mono mb-5 justify-center">
            <h3 className="font-bold text-xl">Video Fetching Successful</h3>
            <img
              className="m-2"
              width="30px"
              height="30px"
              alt="download"
              src={DownloadImage}
            />
            <img
              className="animate-ping"
              width="30px"
              height="30px"
              alt="download"
              src={DownloadImage}
            />
          </div>

          {audioResponse.info.data.map((format, index) => {
            return (
              <Button
                sx={{ margin: "10px", color: "blue", fontWeight: "bold" }}
                key={index}
                variant="outlined"
                onClick={() => openLink(format.url)}
              >
                Download Video [{format.resolution}]
              </Button>
            );
          })}
        </div>
      )}

      {playVideo && (
        <div className="w-full sm:w-50px lg:w-1/2 mt-10 mb-10">
          <ReactPlayer
            width="100%"
            loop={true}
            controls={true}
            pip={true}
            volume={1}
            url={inVideoUrl}
          />
        </div>
      )}
    </div>
  );
}

export default HomePage;
