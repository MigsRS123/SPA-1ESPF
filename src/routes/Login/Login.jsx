import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Login() {

    //criando o redirecionador 
    const navigate = useNavigate();

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
            alert("Ocorreu um erro no processamento da sua solicitação!");
        }

        //REALIZANDO A VALIDAÇÃO DO USUÁRIO.
        for (let x = 0; x < users.length; x++) {
            const user = users[x];
            //realizando a comparação de fato!
            if(user.email == usuario.email && user.senha == usuario.senha){
                alert("Login realizado com sucesso!!!")
                //redirecionando o ususario para a pagina home
                navigate("/");
                return;
            }  
        }

        alert("Login ou senha incorretos!")
        setUsuario({
            email:"",
            senha: ""
        });
    }
    
    return (
        <div>
            <h1>Login</h1>
    
            <div>
                <form onSubmit={handleSubmit}>
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
    