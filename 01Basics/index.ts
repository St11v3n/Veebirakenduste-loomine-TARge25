//harjutus 1
type User = {
    id: string
    name: string
    age: number
    address: {
        street: string
        city: string
    }
}
//soovin näidata ainult name ja age, aga võetakse kogu objekti sisu
//kuna kasutatakse User type
function renderUserDetails(user: User) {
    console.log(user.name, user.age)
}

function renderUserDetails1(user: Pick<User, "name"| "age">) {
    console.log(user.name, user.age)
}

const user: User = {
    id: "ads",
    name: "Kyle",
    age: 123,
    address: {
        street: "sdf",
        city: "London"
    }
};

renderUserDetails(user);

//NB! selleks, et näha konsoolis tulemust
//1 tsc tsfailiNimi.ts
//2 genereerib js faili
//33 node index.js käsklus tuleb