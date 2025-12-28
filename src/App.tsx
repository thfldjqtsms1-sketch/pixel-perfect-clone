import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Planning from "./pages/Planning";
import Location from "./pages/Location";
import Complex from "./pages/Complex";
import Sales from "./pages/Sales";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/pixel-perfect-clone/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/location" element={<Location />} />
          <Route path="/premium" element={<Location />} />
          <Route path="/complex" element={<Complex />} />
          <Route path="/landscape" element={<Complex />} />
          <Route path="/community" element={<Complex />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/announcement" element={<Sales />} />
          <Route path="/units" element={<Planning />} />
          <Route path="/model-house" element={<Planning />} />
          <Route path="/register" element={<Register />} />
          <Route path="/media" element={<Home />} />
          <Route path="/news" element={<Home />} />
          <Route path="/contact" element={<Location />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
