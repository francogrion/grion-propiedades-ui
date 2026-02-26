import { AppRoutes } from "@/models/routes.model"
import NotFound from "@/public/not-found/NotFound"
import type { ReactNode } from "react"
import { Navigate, Route, Routes } from "react-router-dom"

interface Props {
  children: ReactNode
}

export const RoutesNotFound = ({ children }: Props) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<Navigate to={AppRoutes.notFound} />} />
      <Route path={AppRoutes.notFound} element={<NotFound />} />
    </Routes>
  )
}