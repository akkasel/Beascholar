import React, { useEffect, useState } from "react";
import "../../../App.css";
import TopBarAdmin from "../adminMasterPage/TopBarAdmin";
import SideBarAdmin from "../adminMasterPage/SideBarAdmin";
import Card from "@mui/material/Card";
import SearchBar from "../../SearchBar";
import AjuanJadiExpertItem from "./itemVerifikasiExpert/AjuanJadiExpertItem";
import dokumenemotSvg from "../../../img/dokumenemot.svg";
import verifikasilogoSvg from "../../../img/verifikasilogo.svg";
import uploadbeasiswalogoSvg from "../../../img/uploadbeasiswalogo.svg";

import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";

const AdminVerifikasiPage = () => {
  const [expertList, setExpertList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // get all Expert data
  useEffect(() => {
    const fetchExpert = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "expert"));
        const documentsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setExpertList(documentsData);
      } catch (err) {
        console.error("Error fetching expert data: ", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExpert();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <div>
      <TopBarAdmin /> {/* Render the TopBar component */}
      <div className="daftar-jadwal-interview-page">
        <SideBarAdmin /> {/* Render the SideBar component */}

        <div className="interview-page-container">
          {/*Header text "Daftar hasil analisis dokumen"*/}
          <div className="interview-header-container">
            <img
              className="rocket-icon"
              src={dokumenemotSvg}
              alt="Icon"
              width={40}
              height={40}
            />
            <h1 className="latihan-interview-text">
              Daftar Pengajuan Diri Sebagai Expert
            </h1>
          </div>

          <div>
            <Card
              className="checkbox-card-container"
              variant="outlined"
              sx={{
                borderRadius: "16px",
                padding: "15px",
                marginBottom: "20px",
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#FFFFFF", // white background
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)", // soft shadow
                position: "relative", // to position the circle
                width: "1100px",
                marginLeft: "80px",
              }}
            >
              <span className="text-filter">Semua</span>
              <span className="text-filter-not-selected">Belum Diproses</span>
              <span className="text-filter-not-selected">
                Pengajuan Ditolak
              </span>
              <span className="text-filter-not-selected">
                Pengajuan Diterima
              </span>
            </Card>
          </div>

          <div className="search-bar-daftar-jadwal-interview">
            <SearchBar></SearchBar>
          </div>

          {/* Display UI of all Expert item */}
          <div>
            {expertList.map((expert) => (
              <AjuanJadiExpertItem key={expert.id} expert={expert} />
            ))}
          </div>

          {/* Add your input form here */}
        </div>
      </div>
    </div>
  );
};

export default AdminVerifikasiPage;
