import React from "react"

const Login = ({ handleLogin }) => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const handleSubmit = e => {
    e.preventDefault()
    let payload = { email, password }
    handleLogin(payload)
  }
  return (
    <div>
      <h3>LOGIN FORM</h3>
      <form onSubmit={handleSubmit}>
        <input onChange={e => setEmail(e.target.value)} placeholder="email" />
        <br />
        <input
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="passoword"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export { Login }
