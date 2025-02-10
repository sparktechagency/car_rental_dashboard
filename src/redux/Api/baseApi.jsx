import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import img from "../../assets/images/place.png";
const baseQuery = fetchBaseQuery({
  baseUrl: "http://178.128.174.197:8001",
  // prepareHeaders: (headers) => {
  //   const token = JSON.parse(localStorage.getItem("token"));
  //   if (token) {
  //     headers.set("Authorization", `Bearer ${token}`);
  //   }
  //   return headers;
  // },

  prepareHeaders: (headers, { getState }) => {
    const token = getState().logInUser.token;
    console.log("from baseApi", token);
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["overview", "host"],
  endpoints: () => ({}),
});

export const imageUrl = "http://178.128.174.197:8001";
export const placeImage = img;
