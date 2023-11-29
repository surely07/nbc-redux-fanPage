import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "components/Header";
import Home from "pages/Home";
import Detail from "pages/Detail";
import COMMENTDATA from "shared/commentData";
import Footer from "components/Footer";
import { useState } from "react";
import { CommonContext } from "context/CommonContext";

const Router = () => {
  const [selectedMemberName, setSelectedMemberName] = useState("all");
  const [commentsList, setCommentsList] = useState(COMMENTDATA);

  return (
    <CommonContext.Provider
      value={{
        selectedMemberName,
        setSelectedMemberName,
        commentsList,
        setCommentsList,
      }}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail/:id" element={<Detail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CommonContext.Provider>
  );
};

export default Router;
