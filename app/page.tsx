"use client";
import { useState, useCallback } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Objectives from "./components/Objectives";
import Beneficiaries from "./components/Beneficiaries";
import Donate from "./components/Donate";
import Volunteer from "./components/Volunteer";
import Partner from "./components/Partner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Toast from "./components/Toast";

export default function Home() {
  const [toast, setToast] = useState({ message: "", visible: false });

  const showToast = useCallback((msg: string) => {
    setToast({ message: msg, visible: true });
    setTimeout(() => setToast(t => ({ ...t, visible: false })), 4500);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Objectives />
        <Beneficiaries />
        <Donate onToast={showToast} />
        <Volunteer onToast={showToast} />
        <Partner onToast={showToast} />
        <Contact onToast={showToast} />
      </main>
      <Footer />
      <Toast message={toast.message} visible={toast.visible} />
    </>
  );
}
