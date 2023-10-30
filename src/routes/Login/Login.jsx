import { useState } from "react"

export default function Login() {

    //USE-STATE QUE VAI ARMAZENAR OS DADOS DO FORM.
    const [usuario, setUsuario] = useState({
        email: "",
        senha: ""
    })

    //PREENCHIMENTO DO FORM
    const handleChange = (e)=>{
        //Destruction nos campos do form(name, input).
        const {name, value} = e.target;
        //preenchendo o use-state com os valores da desestrururação, utilizando o operador sprend.
        setUsuario({...usuario,[name]:value});
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()

        let users;

        try {
            const response = await fetch("http://localhost:5000/usuarios");   
            users = await response.json();
        }catch (error) {

        }
    }
    
    return (
        <div>
            <h1>Login</h1>
    
            <div>
                <form>
                    <fieldset>
                        <legend>User Information:</legend>
                        <div>
                            <label htmlFor="idEmail">Email:</label>
                            {/*Para o prenchimento é obrigatório adicionar o atributo value e o evento onChange */}
                            <input type="email" name="email" id="idEmail" placeholder="Digite seu email." value={usuario.email} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="idSenha">Senha:</label>
                            <input type="password" name="senha" id="idSenha" placeholder="Digite sua senha." value={usuario.senha} onChange={handleChange}/>
                        </div>
                        <div>
                            <button>LOGIN</button>
                        </div>
                    </fieldset>
                </form>
            </div>
    
        </div>
      )
    }
    