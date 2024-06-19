import { createContext, useState } from "react";

export const AuthContext = createContext(0);

function AuthProvider({ children }) {
    const [login, setLogin ] = useState( false );
    const [cadastro, setCadastro ] = useState( false );
    const [usuarioId, setUsuarioId] = useState(0);
    const [error, setError] = useState(false);

    async function Login(email, senha) {      
        
        if (email != "" && senha != "") {
            await fetch('http://10.139.75.47:5251/api/Usuarios/Login', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    usuarioEmail: email,
                    usuarioSenha: senha
                })
            })
                .then(res => res.json())             
                .then(json => {
                   if(json.usuarioId != 0)
                    {
                        setLogin(true);
                        setUsuarioId(json.usuarioId);
                    }
                })
                .catch(err => setError(true))                
        } else {
            setError(true)
        }
    }

    return (
        <AuthContext.Provider value={{  Login, login: login, setLogin, error: error, cadastro: cadastro, usuarioId:usuarioId, setCadastro }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;