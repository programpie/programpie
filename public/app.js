document.addEventListener("DOMContentLoaded", event =>{

    const app = firebase.app();
    console.log(app)

});

function googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)

            .then(result => {
                const user = result.user;
                header.innerHTML = `Welcome aboard ${user.displayName}`
                main.innerHTML = `<p class='message'>In my life as a <span>software developer</span>, especially when it comes to developing software for the <span>web</span>, time and time again I have come across the same <span>problem</span> which is rarely talked about... And boy, do I wish someone introduced me to soemthing like this before. If you are a <span>hobby programmer</span>, you want to <span>get a raise</span> or maybe you plan on creating the next <span>billion dollar software product</span>, either what we have comming up might just be the <span>stepping stone</span> for you.<br><br>Soon an email carrying the <span>good news</span> and further instructions is going to fly into your inbox.</p>`
                
            })
            .catch(console.log)
}