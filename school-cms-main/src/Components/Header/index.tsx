import { pages } from '@Assets/Data/mock'
import NavBarItem from './NavBarItem'

export const PartialNav = () => {
  return (
    <nav id="partial_nav">
      <div className="logo">Logo</div>
    </nav>
  )
}

export const FullNav = () => {
  return (
    <nav id="full_nav">
      {pages.map((page, index) => {
        if (index < pages.length / 2)
          return <NavBarItem key={page} to={page} title={page} />
        return null
      })}
      <div className="logo">Logo</div>
      {pages.map((page, index) => {
        if (index >= pages.length / 2)
          return <NavBarItem key={page} to={page} title={page} />
        return null
      })}
    </nav>
  )
}

export const NavBar = () => {
  return (
    <header id="header">
      <PartialNav />
      <FullNav />
    </header>
  )
}

export default NavBar
