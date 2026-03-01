import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {Layout} from "./components/layout/Layout";
import { Sobre } from "./pages/Sobre/Sobre";
import { Produtos } from "./pages/Produtos/Produtos";
import { Contato } from "./pages/Contato/Contato";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navigate to="/home" />} />

        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/contato" element={<Contato />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;