import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Homepage from "./pages/Homepage";
import Spinner from "./components/Spinner";
const CameraTest = lazy(() => import("./pages/CameraTestPage"));

function App() {

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Spinner/>}>
          <Routes>
            <Route path="/" element={<Homepage />} />

            <Route path="/camera-test" element={<CameraTest />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
