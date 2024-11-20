import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = "https://jsonplaceholder.typicode.com";

const questionApi = createApi({
  reducerPath: "question",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  tagTypes: ["Question"],
  endpoints: (builder) => ({
    fetchQuestion: builder.query({
      providesTags: ["Question"],
      query: () => `/posts`,
    }),
  }),
});

export const { useFetchQuestionQuery } = questionApi;
export { questionApi };
