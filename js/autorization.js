//pattern Adapter для сторінки авторизації клієнта 

const butYes = document.getElementById("button_yes");
const butClose = document.getElementById("button_cancel");


butYes.addEventListener('click', () => {
    var phoneNumber = document.getElementById("number").value;
    console.log(phoneNumber);
    var passWord = document.getElementById("password").value;
    console.log(passWord);
});

butClose.addEventListener('click', () => {
    console.log("no");
});

const response = fakeAPI();
const compatibleResponse = responseToWantedAdapter(response);

function fakeAPI() {
    return {
    entries: [
    {
        phone_number: '+380660375234',
        pass_word: 'x56gfh783!',
    },
    {
        phone_number: '+380685342467',
        pass_word: 'dfr89qwertj3',
    },
    ],
}
}
function responseToWantedAdapter(response) {
    return response.entries.map((entry) => ({
      phoneNumber: entry.phone_number,
      passWord: entry.pass_word,
}))
}

//реалізація паттерна Abstract Factory для загального інтерфейсу авторизації, номери телефону різних країн
function Phone() {
    this.name = "Phone";
    this.numbers = 13;
}

function PhoneUS() {
    this.name = "PhoneUS";
    this.numbers = 10;
}

function PhonePL() {
    this.name = "PhonePL";
    this.wheels = 9;
}
const phoneFactory = {
    createPhone: function(type) {
        switch (type.toLowerCase()) {
            case "phone":
                return new Phone();
            case "phoneus":
                return new PhoneUS();
            case "phonepl":
                return new PhonePL();
            default:
                return null;
        }
    }
};
var phone = phoneFactory.createPhone("Phone");
console.log(phone);