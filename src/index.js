import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Layout } from "./components";
import {
  ForgetPassword,
  Register,
  Login,
  PostPage,
  ProfilePage,
  SearchPage,
  ResetPassword,
} from "./pages";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/profile/:username" element={<ProfilePage />} />
          <Route path="/:author/:postId" element={<PostPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
        <Route path="auth" element={<Layout />}>
          <Route index element={<Register />} />
          <Route path="join" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="forget-password" element={<ForgetPassword />} />
          <Route
            path="reset-password/:resetToken"
            element={<ResetPassword />}
          />
        </Route>
        <Route path="*" element={"404 Page"} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
