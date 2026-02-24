import { Navigate, Route } from "react-router-dom"
import { RoutesNotFound } from "../components/RoutesNotFound"
import { AppRoutes } from "../models"
import { Dashboard } from "./Dashboard/Dasboard"

export const PrivateRouter = () => {
  return (
    <RoutesNotFound>
      <Route path="/" element={<Navigate to={AppRoutes.private.dashboard} />} />
      <Route path={AppRoutes.private.dashboard} element={<Dashboard />} />
    </RoutesNotFound>
  )
}