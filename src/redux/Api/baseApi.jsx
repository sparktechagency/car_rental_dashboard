import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import img from "../../assets/images/place.png";
const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.nardo.app",
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

export const imageUrl = "https://api.nardo.app";
export const placeImage = img;
