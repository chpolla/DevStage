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
  <main>
      <h3>Inscrição confirmada!</h3>
      <p>
        Convide mais pessoas e concorra a prêmios!
        <br/>
        Compartilhe o link e acompanhe as inscrições:
      </p>
      <div class="input-group">
        <label for="link">
          <img src="./Assets/link.png" alt="Link icon">
        </label>
        <input type="text" id="link" value="https://evento.com?ref=${userData.ref}" disabled>
      </div>
    </main>
    <section class="stats">
      <h4>
        ${getTotalSubscribers(userData)}
      </h4>
      <p>
        Inscrições Feitas
      </p>
    </section>
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

//  const updateImageLinks = () => {
//    document.querySelectorAll('img').forEach((img) =>{
//      img.src = `https://raw.githubusercontent.com/maykbrito/my-public-files/main/nlw-19/${img.src}`
//    })
//  }

const startApp = () => {
  const content = `
    <main>
      <section class="about">
        <div class="section-header">
          <h2>
            Sobre o evento
          </h2>
          <span class = "badge">AO VIVO</span>
        </div>
        <p>
          Um evento feito por e para pessoas desenvolvedoras apaixonadas por criar soluções inovadoras e compartilhar conhecimento. Vamos mergulhar nas tendências mais recentes em desenvolvimento de software, arquitetura de sistemas e tecnologias emergentes, com palestras, workshops e hackathons.
          <br/><br/>
          Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito 
        </p>
      </section>
      <section class="registration">
        <h2>Inscrição</h2>
        <form id="form">
          <div class="input-wrapper">
            <div class="input-group">
              <label for="email">
                <img src="./Assets/mail.png" alt="Email icon">
              </label>
              <input type="email" id="email" name="email" placeholder="E-mail">
            </div>

            <div class="input-group">
              <label for="phone">
                <img src="./Assets/phone.png" alt="Phone icon">
              </label>
              <input type="text" id="phone" name="phone" placeholder="Telephone">
            </div>
          </div>
          <button>
            Confirmar
            <img id="arrowBlue" src="./Assets/arrowBlue.png" alt="Arrow Blue">
            <img id="arrowBlack" src="./Assets/arrowBlack.png" alt="Arrow Black">
          </button>
        </form>
      </section>
    </main>`

  app.innerHTML = content
  // updateImageLinks()
  formAction()
}
startApp()
