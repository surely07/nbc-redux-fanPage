import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "components/Header";
import Home from "pages/Home";
import Detail from "pages/Detail";
import COMMENTDATA from "shared/commentData";
import Footer from "components/Footer";
import { useState } from "react";

const Router = () => {
  const [selectedMemberName, setSelectedMemberName] = useState("all");
  const [commentsList, setCommentsList] = useState(COMMENTDATA);

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              commentsList={commentsList}
              setCommentsList={setCommentsList}
              selectedMemberName={selectedMemberName}
              setSelectedMemberName={setSelectedMemberName}
            />
          }
        />
        <Route
          path="detail/:id"
          element={
            <Detail
              commentsList={commentsList}
              setCommentsList={setCommentsList}
              selectedMemberName={selectedMemberName}
            />
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default Router;
