import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AboutPage } from './pages/AboutPage';
import { CollectionPage } from './pages/CollectionPage';
import { CommunityPage } from './pages/CommunityPage';
import { ContactPage } from './pages/ContactPage';
import { GalleryIndexPage } from './pages/GalleryIndexPage';
import { HealingPage } from './pages/HealingPage';
import { HomePage } from './pages/HomePage';
import { MissionsPage } from './pages/MissionsPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="healing" element={<HealingPage />} />
        <Route path="ministries" element={<Navigate to="/healing" replace />} />
        <Route path="missions" element={<MissionsPage />} />
        <Route path="community" element={<CommunityPage />} />
        <Route path="gallery" element={<GalleryIndexPage />} />
        <Route path="gallery/:slug" element={<CollectionPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
