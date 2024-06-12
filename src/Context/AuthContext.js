import { createContext, useState } from "react";

export const AuthContext = createContext(0);

function AuthProvider({ children }) {
    const [login, setLogin ] = useState( false );
    const [cadastro, setCadastro ] = useState( false );
    const [error, setError] = useState(false);

    async function Login(email, senha) {       
        if (email != "" && senha != "") {
            await fetch('http://10.139.75.47:5251/api/Usuarios/Login?email='+email+'&senha='+senha, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    senha: senha
                })
            })
                .then(res => (res.ok == true) ? res.json() : false)             
                .then(json => {
                    setLogin((json) ? true : false);
                   setError((json) ? false : true);
                })
                .catch(err => setError(true))                
        } else {
            setError(true)
        }
    }

    return (
        <AuthContext.Provider value={{  Login, login: login, setLogin, error: error, cadastro: cadastro, setCadastro }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;