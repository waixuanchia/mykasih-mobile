
const signIn = async (email,password) => {


    const token = await fetch(`${url}/api/token/`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({ email , password })

    }).then(res => res.json());

    return token;

}