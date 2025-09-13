import React from "react";
import PageWrapper from "./components/PageWrapper";
import PixelBoard from "./components/PixelBoard";
import Footer from "./components/Footer";

function App() {
  return (
    <PageWrapper>
      <PixelBoard />
      {/* Other content */}
      <Footer />
    </PageWrapper>
  );
}

export default App;
