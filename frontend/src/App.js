import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/AuthDetails';
import ExpertSignIn from './components/auth/ExpertSignIn';
import ExpertSignUp from './components/auth/ExpertSignUp';
import AdminSignIn from './components/auth/AdminSignIn';
import AdminSignUp from './components/auth/AdminSignUp';
import HomePage from './components/user/home/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InterviewPage from './components/user/interview/InterviewPage';
import DaftarJadwalInterviewPage from './components/user/interview/DaftarJadwalInterviewPage';
import FeedbackInterviewPage from './components/user/interview/FeedbackInterviewPage';
import DocumentPage from './components/user/document/DocumentPage';
import DaftarHasilAnalisisDokumenPage from './components/user/document/DaftarHasilAnalisisDokumenPage';
import FeedbackDokumenPage from './components/user/document/FeedbackDokumenPage';
import ProfilePage from './components/user/profile/ProfilePage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* Route yang berkaitan dengan role User */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/auth-details" element={<AuthDetails />} />

          <Route path="/home" element={<HomePage />} />

          <Route path="/interview" element={<InterviewPage />} />
          <Route path="/daftar-jadwal-interview" element={<DaftarJadwalInterviewPage />} />
          <Route path="/feedback-interview" element={<FeedbackInterviewPage />} />

          <Route path="/document" element={<DocumentPage />} />
          <Route path="/daftar-hasil-analisis-dokumen" element={<DaftarHasilAnalisisDokumenPage />} />
          <Route path="/feedback-dokumen" element={<FeedbackDokumenPage />} />

          <Route path="/profile" element={<ProfilePage />} />


          {/* Route yang berkaitan dengan role Expert simpan dibawah sini */}
          <Route path="/expert-signin" element={<ExpertSignIn />} />
          <Route path="/expert-signup" element={<ExpertSignUp />} />

          {/* Route yang berkaitan dengan role Admin simpan dibawah sini */}
          <Route path="/admin-signin" element={<AdminSignIn />} />
          <Route path="/admin-signup" element={<AdminSignUp />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;