import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import axios from "axios";
import { LetterContext } from "context/LetterContext";
import Header from "components/Header";
import Home from "pages/Home";
import Detail from "pages/Detail";
import Footer from "components/Footer";

const Router = () => {
  const { setLetters } = useContext(LetterContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3001/commentData");
      setLetters(response.data);
    };
    fetchData();
  }, [setLetters]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
