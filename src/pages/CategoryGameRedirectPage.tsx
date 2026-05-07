import { Navigate, useParams } from 'react-router-dom'
import { categories, type CategoryId } from '../entities/category'

const isCategoryId = (value: string | undefined): value is CategoryId =>
  categories.some((category) => category.id === value)

export function CategoryGameRedirectPage() {
  const { categoryId } = useParams()

  if (!isCategoryId(categoryId)) {
    return <Navigate to="/categories" replace />
  }

  return <Navigate to={`/play/find/${categoryId}`} replace />
}
