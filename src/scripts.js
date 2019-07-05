//classes

class user {
    constructor(username, email, password) {

        this.username = username;
        this.email = email;
        this.password = password;
    }

    register() {
        console.log(this.username);
    }
}

let Bob = new user('Tonisal', 'markus.bressel@gmx.de', 'penis');

Bob.register();


class member extends user {
    constructor(username, email, password, memberpackage) {
        super(username, email, password);

        this.package = memberpackage;

    }

}

// Template literals
// Connect lines while templating with backticks (`)
// Insert Variables or calling function with $(variableName) while using backticks

let name = 'Markus';

function returnUse(string) {
    return string;
}

let template =
    `<h1>hello, ${name}</h1>
    <p>this is a simple ${returnUse('template')}</p>`;

document.getElementById('template').innerHTML = template;


// New string methods
// startsWith()
// endsWith()
// includes()

let theString = 'Hello, my name is Markus and penis';

console.log(theString.startsWith('Hello')); //true
console.log(theString.endsWith('Hello')); //false
console.log(theString.includes('Hello')); //true

// Default parameters

