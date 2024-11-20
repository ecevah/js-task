"use client";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { questionApi } from "./apis/question_api";

export const store = configureStore({
  reducer: {
    [questionApi.reducerPath]: questionApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(questionApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useFetchQuestionQuery } from "./apis/question_api";
