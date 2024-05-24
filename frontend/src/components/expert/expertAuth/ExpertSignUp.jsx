import React, { useState } from "react";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const ExpertSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [university, setUniversity] = useState("");
  const [cv, setCv] = useState(null);
  const [essay, setEssay] = useState(null);
  const [ktp, setKtp] = useState(null);
  const [photo, setPhoto] = useState(null);

  const navigate = useNavigate(); // to navigate

  const signUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      navigate("/expert-home"); // navigate to home screen
      // Further processing for file uploads goes here
    } catch (error) {
      console.log(error);
    }
  };

  // Handlers for file inputs
  const handleCvChange = (e) => {
    setCv(e.target.files[0]);
  };

  const handleKTPChange = (e) => {
    setKtp(e.target.files[0]);
  };

  const handleEssayChange = (e) => {
    setEssay(e.target.files[0]);
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  return (
    <div className="login-page">
      <div className="daftar-expert-container">
        <form onSubmit={signUp}>
          <h1 className="daftar-expert-heading">Daftar sebagai Expert</h1>
          <h2 className="daftar-expert-h2">
            Kewajiban seorang Expert : Interview Pengguna, Analisa Dokumen
            Pengguna, Upload Informasi Beasiswa Terbaru
          </h2>

          <div className="input-group">
          <input
            type="text"
            placeholder="Nama Lengkap"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <i className="fas fa-user input-icon"></i>
        </div>

        <div className="input-group">
          <input
            type="text"
            placeholder="Tingkat Pendidikan"
            value={educationLevel}
            onChange={(e) => setEducationLevel(e.target.value)}
          />
          <i className="fas fa-graduation-cap input-icon"></i>
        </div>

        <div className="input-group">
          <input
            type="text"
            placeholder="Universitas / Almamater"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
          />
          <i className="fas fa-university input-icon"></i>
        </div>

        <span className="text-biasa-di-expert-signup-page">Masukan CV kamu disini (.pdf) :</span>
        <div className="input-group">
          <input
            type="file"
            onChange={handleCvChange}
          />
          <i className="fas fa-upload input-icon"></i>
        </div>

        <span className="text-biasa-di-expert-signup-page">Foto KTP :</span>
        <div className="input-group">
          <input
            type="file"
            placeholder="KTP"
            value={ktp}
            onChange={handleKTPChange}
          />
          <i className="fas fa-id-card input-icon"></i>
        </div>

        <span className="text-biasa-di-expert-signup-page">Masukan Essay berisi deskripsi diri dan alasan ingin bergabung menjadi Expert di BeaScholar (.docx / .doc / .docs) :</span>
        <div className="input-group">
          <input
            type="file"
            onChange={handleEssayChange}
          />
          <i className="fas fa-upload input-icon"></i>
        </div>

        <span className="text-biasa-di-expert-signup-page">Foto diri :</span>
        <div className="input-group">
          <input
            type="file"
            onChange={handlePhotoChange}
          />
          <i className="fas fa-upload input-icon"></i>
        </div>

          <div className="baru-di-beascholar-container">
            <label className="baru-di-beascholar">
              Sudah punya akun sebagai Expert?{" "}
            </label>
            <a className="daftar-disini-text" href="/expert-signin">
              Login sebagai Expert disini!
            </a>{" "}
            {/* Jangan lupa di href nya nanti simpan link untuk ke page Sign Up*/}
          </div>

          <button type="submit" onClick={signUp}>Daftar sebagai Expert</button>
        </form>
      </div>
    </div>
  );
};

export default ExpertSignUp;
