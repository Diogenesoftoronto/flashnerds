import { useAuth } from  '../contexts/AuthContext'

function Login() {
  const { login } = useAuth();
  // console.log(await login('user4@email.com', 'abc1234!'))
  login('user4@email.com', 'abc1234!').then(response => {
    console.log(response)
  })

  return (
    <>
      <h1>LOGIN</h1>
    </>
  )
}

export default Login