import React from "react";
import { Navbar } from "../../ui/components";
import { Navigate, Route, Routes } from "react-router";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:id" element={<HeroPage />} />

          {/* search, Hero by id */}

          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>

    </>
  );
};
