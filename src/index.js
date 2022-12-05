import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Layout } from "./components";
import { PostPage, ProfilePage } from "./pages";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/profile/:username" element={<ProfilePage />} />
          <Route path="/:author/:postId" element={<PostPage />} />
          <Route path="*" element={"404 Page"} />
        </Route>
        <Route path="*" element={"404 Page"} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
