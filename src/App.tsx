import { BrowserRouter, Route, Routes } from "react-router-dom";

// layouts
import View from "layouts/View";

// views
import Home from "views/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<View />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
