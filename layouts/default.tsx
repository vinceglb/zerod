import { AppBar } from '../components/appbar/AppBar'

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <AppBar />
      {children}
    </>
  )
}
