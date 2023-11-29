import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "components/Header";
import Home from "pages/Home";
import Detail from "pages/Detail";
import Footer from "components/Footer";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { LetterContext } from "context/LetterContext";

const Router = () => {
  const { setLetters } = useContext(LetterContext);
  const [selectedMemberName, setSelectedMemberName] = useState("all");

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
        <Route
          path="/"
          element={
            <Home
              selectedMemberName={selectedMemberName}
              setSelectedMemberName={setSelectedMemberName}
            />
          }
        />
        <Route
          path="detail/:id"
          element={
            <Detail
              selectedMemberName={selectedMemberName}
              setSelectedMemberName={setSelectedMemberName}
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
