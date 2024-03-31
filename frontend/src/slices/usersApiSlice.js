import { apiSlice } from "./apiSlice";

const USERS_URL = "/api/users";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        //in data we have {email: 'ad@gmail.con`', password: 'sgssg'} because we passed {...userLogin}
        url: `${USERS_URL}/login`, //   POST /api/users/login
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        //in data we have {email: 'ad@gmail.con`', password: 'sgssg'} because we passed {...userLogin}
        url: `${USERS_URL}/register`, //
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } =
  usersApiSlice;
