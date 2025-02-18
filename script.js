const app = document.getElementById("app")

//Array, Vector
 const users = [
  {
    email: "chenriquep6@gmail.com",
    phone: "48984750196",
    ref: 100,
    refBy: null,
  },
  {
    email: "cpolla726@gmail.com",
    phone: "4898758139",
    ref: 200,
    refBy: 100,
  },
  {
    email: "test@test.com",
    phone: "48999999999",
    ref: 300,
    refBy: 100,
  },
 ]

 const getUser = (userData) => {
  return users.find((user) => {
    return user.email == userData.email
  })
  
 }

 const getTotalSubscribers = (userData) =>{
  const subs = users.filter((user) => {
    return user.refBy == userData.ref
  })
  return subs.length
 }  

 const showInvite = (userData) => {
  app.innerHTML = `
  <input type="text" id="link" value="https://evento.com?ref=${userData.ref}" disabled>
  <div>
    <h4>
      ${getTotalSubscribers(userData)}
    </h4>
    <p>
      Inscrições feitas.
    </p>
  </div>
  `
 }

 const saveUser = (userData) =>{
  const newUser = {
    ...userData,
    ref: Math.round(Math.random() * 4000),
    refBy: 100
  }
  users.push(newUser)
  console.log(users)
  return newUser    
 }

const formAction = () => {
  const form = document.getElementById("form")
  form.onsubmit = (event) =>{
    event.preventDefault()
    const formData = new FormData(form)
    const userData = {
      email: formData.get('email'),
      phone: formData.get('phone'),
    }
    const user = getUser(userData)
    if(user){
      showInvite(user)
    }else{
      const newUser = saveUser(userData)
      showInvite(newUser)
    }
  } 
}

const startApp = () => {
  const content = `
  <form id="form">
    <input type="email" name="email" placeholder="E-mail" />
    <input type="text" name="phone" placeholder="Telephone" />
    <button>
      Confirmar
    </button>
  </form>`

  app.innerHTML = content

  formAction()
}
startApp()
