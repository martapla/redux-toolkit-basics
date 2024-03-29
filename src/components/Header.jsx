import { useSelector } from "react-redux"

const Header = () => {
    const user = useSelector((state) => state.user)
    
  return (
    <header>
       <h1> Redux toolkit Example</h1>   
          <ul>
            <li>Name: {user.name}</li>
            <li>Username: {user.username}</li>
            <li>Email: {user.email}</li>
          </ul>
    </header>
  )
}

export default Header