import { Outlet } from 'react-router-dom'
import { Container } from './styles'
import { Sidebar } from '../../components/Siderbar'


import logoImg  from '../../assets/logo.svg'

export default function Main() {
  return (
    <Container>
      <Sidebar />
       <section>
         <img src={logoImg} />
         <Outlet />
       </section>
    </Container>
  )
}
