import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "components/Header";
import Home from "pages/Home";
import Detail from "pages/Detail";
import Footer from "components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

const Router = () => {
  const [selectedMemberName, setSelectedMemberName] = useState("all");

  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3001/commentData");
      setCommentsList(response.data);
    };
    fetchData();
  }, []);

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
              commentsList={commentsList}
              setCommentsList={setCommentsList}
            />
          }
        />
        <Route
          path="detail/:id"
          element={
            <Detail
              selectedMemberName={selectedMemberName}
              setSelectedMemberName={setSelectedMemberName}
              commentsList={commentsList}
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
