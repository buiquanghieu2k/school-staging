import { Link, LinkProps } from 'react-router-dom'

export default function NavBarItem({ to, title }: LinkProps) {
  return (
    <Link to={to} className="link_item">
      {title}
    </Link>
  )
}
