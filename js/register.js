//função para registro
async function registerUser(email, password, event){
    //evitar eventos padrões 
    event.preventDefault();

    try{
        //faz o processo de authenticação passando o email e senha
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;

        //insere os dados no banco de dados, acessando a coleção users
        await db.collection("users").doc(user.uid).set(
            {
                email: email,
                uid: user.uid
            }
        );

        alert("Cadastro realizado com sucesso")

    } catch (error){
        console.log(error);
    }
}

//pegar os dados do form e inserir na função
document.getElementById("registerButton").addEventListener("click", async (event)=>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    //valida se são iguais
    if(password !== confirmPassword){
        alert("Senhas não são iguais");
    }
    //insere os dados na função
    registerUser(email, password, event);
} );