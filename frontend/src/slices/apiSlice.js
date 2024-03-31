import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseQuery = fetchBaseQuery({
  baseUrl: "https:localhost:8000",
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
});
