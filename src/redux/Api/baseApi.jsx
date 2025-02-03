import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import img from "../../assets/images/place.png";
const baseQuery = fetchBaseQuery({
  baseUrl: "http://10.0.60.26:8056",
  prepareHeaders: (headers) => {
    const token = JSON.parse(localStorage.getItem("token"));
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

export const imageUrl = "http://10.0.60.26:8056";
export const placeImage = img;
