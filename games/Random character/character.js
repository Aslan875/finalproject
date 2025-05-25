const names = ["Edward", "Morgan", "Leon", "Sophee", "Adeline", "Alex"];
const classes = ["Warrior", "Mage", "Archer", "Thief"];
const weapons = ["Sword", "Bow", "Dagger", "Staff"];

const images = {
    "Warrior": "images/warrior.png",
    "Mage": "images/mage.png",
    "Archer": "images/archer.png",
    "Thief": "images/thief.png"
};

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};

console.log(getRandomElement(names));

function generateCharacter() {
    const character = {
        name: getRandomElement(names),
        charClass: getRandomElement(classes),
        charWeapon: getRandomElement(weapons),
        image: "",
        introduce: function() {
            return `🛡️ Your hero: ${this.name}, ${this.charClass}, ${this.charWeapon}`;
        }
    };
    character.image = images[character.charClass];
    updateUI(character);
}

function updateUI(character) {
    const output = document.getElementById("character-text");
    const image = document.getElementById("character-image");
    const charBox = document.getElementById("character-box");

    charBox.classList.remove("show");
    charBox.classList.add("hide");

    setTimeout(() => {
        output.textContent = character.introduce();
        image.src = character.image;
        image.alt = character.charClass;

        charBox.classList.remove("hide");
        charBox.classList.add("show", "glow");

        setTimeout(() => charBox.classList.remove("glow"),
         1000);

    }, 500);
}

document.getElementById("generate").addEventListener("click", generateCharacter);