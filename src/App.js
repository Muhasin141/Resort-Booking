import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import BookingForm from "./components/BookingForm";
import AdminView from "./components/AdminView";
import Footer from "./components/Footer";
import AdminSection from "./components/AdminSection";

const MainLayout = () => {
  return (
    <>
      <Header />

      <main className="container mx-auto px-4 md:px-8">
        <section id="services">
          <Services />
        </section>

        <section id="gallery">
          <Gallery />
        </section>

        <section id="book-now" className="py-16">
          <h2 className="text-4xl font-bold text-center text-indigo-800 mb-8">
            Start Your Retreat
          </h2>
          <BookingForm />
        </section>

        <section>
          <AdminSection />
        </section>
      </main>

      <Footer />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 font-sans antialiased">
        <Routes>
          <Route path="/" element={<MainLayout />} />

          <Route
            path="/admin-view"
            element={
              <div className="min-h-screen bg-gray-50 font-sans antialiased">
                <AdminView />
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
