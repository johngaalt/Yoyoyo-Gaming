import { Navigate, Route, Routes } from 'react-router-dom'
import { CategoriesPage } from '../../pages/CategoriesPage'
import { CategoryGameRedirectPage } from '../../pages/CategoryGameRedirectPage'
import { FindWordPage } from '../../pages/FindWordPage'
import { LanguagePage } from '../../pages/LanguagePage'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LanguagePage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route
        path="/categories/:categoryId"
        element={<CategoryGameRedirectPage />}
      />
      <Route path="/play/find/:categoryId" element={<FindWordPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
