import React, { Suspense } from "react";
import Home from "./pages/home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>
        <Home/>
      </Suspense>
    </div>
  );
}

export default App;
