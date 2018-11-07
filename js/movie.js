/*
characters have names, allegiances, and say hello!
characters come in all types, but they all have names
they can say hello, and they have allegiances, like rebellion and empire

'this' refers to the contents of the function between the { and the }
*/
function Character(characterName){
    //the text here will show up in the console of your web browser, please use chrome for this assignment
    console.log("a new character has been made");
    //we set the character name to be a child of character!
    this.cName = characterName;
    console.log(`my character's name is ${this.cName}`);
};
/*
prototype is like a bag of tricks that all characters to get tools from
sayHi is a function that any character can use
*/
Character.prototype.sayHi = function(){
    console.log(`Hi! My name is ${this.cName}`);
}
/*
setAllegiance lets us set what side of the conflict the character is on.
*/
Character.prototype.setAllegiance = function(allegiance){
    this.allegiance = allegiance;
}

/*
Droid is going to extend from Character
-droids are characters
-they have names
-they have allegiances
-they also speak bleepbloop!
*/
function Droid(droidName){
    console.log(`we have a new droid ${droidName}`);
    //Droid uses Character.call to use Characters code for setting the name
    //we send Character a reference to Droid by using the term 'this'
    Character.call(this, droidName);
}
//here we make the prototype for droid take on everything that Charater has
Droid.prototype = Object.create(Character.prototype);
//now we add 'speakBleepBloop' that only exists for droids and not characters
Droid.prototype.speakBleepBloop = function(){
    console.log(`${this.cName} says bleep bloop Weeeeeeeeee! Blort Bleep!`);
}


//We use the 'new' keyword to make a new Droid called R2D2
let R2D2 = new Droid("R2D2");
//we set their allegiance to rebellion
R2D2.setAllegiance("Rebellion");
//here we can check if R2D2 is an instance of Droid
console.log(`is this character a droid? ${R2D2 instanceof Droid}`);
//here we see what side R2D2 is on
console.log(`R2D2 is part of the ${R2D2.allegiance}`);
//finally R2D2 says hi to us in english and in BleepBloop
R2D2.sayHi();
R2D2.speakBleepBloop();

//humanoids are characters too, they extend from Character
function Humanoid(humanoidName, species){
    console.log(`we have a new humanoid called ${humanoidName}`);
    //DO THIS:   how do we call Character and send them an instance to humanoid and a name?  Put it in the line below!
    Character.call(this, humanoidName);
    //DO THIS:   now use this.valuename = value to set species for Humanoid
    this.species = species;

}

//Object.create makes a copy of an Object that we can use without changing the original
Humanoid.prototype = Object.create(Character.prototype);

//DO THIS:   add a function called 'whatSpecies' to Humanoids prototype that will show the characters name and species, USE TEMPLATE LITERALS `` and ${} with console.log
Humanoid.prototype.whatSpecies = function(species){
    //DO THIS:  FUNCTION ACTIONS HERE
    console.log(`${this.cName} is a ${this.species}`);
}
//DO THIS:   make a new humanoid named Lando, who is a Human
let Lando = new Humanoid("Lando","Human");
Lando.setAllegiance("Rebellion");
//lets give lando a job, make it a dot property of Lando.  Make Lando the "Mayor of Cloud City"
Lando.job = "Mayor of Cloud City";
//DO THIS:  call the sayHi() function of Lando.
Lando.sayHi();
//DO THIS: make a console log command that displays Landos' job
console.log(`I am a ${Lando.job}`);
//DO THIS:  call whatSpecies() on Lando
Lando.whatSpecies("Human");

//now lets make Chewbacca!
//DO THIS:   declare Chewbacca as a new Humanoid, whose name is Chewbacca and species is Wookie
let Chewbacca = new Humanoid("Chewbacca", "Wookie");
//DO THIS:  give chewbacca his own sayHi function that says hello in Wookie(be creative), then call that function
Chewbacca.speakWookie = function(){
    console.log(`${this.cName} says Kagugy Zarbablup Malyaba! Bozalrp!!`);
}
Chewbacca.speakWookie();
//DO THIS:  call whatSpecies() on chewbacca
Chewbacca.whatSpecies("Wookie");

/* DO THIS:
finally lets make a force user.  A force user extends humanoid
they get a name, species, forceSide(light or dark)
their prototype should include functions for
-use lightsaber
-massive jump
-force throwing where you can specify what gets thrown
*/
function ForceUser(ForceUserName, species, forceSide){
    console.log(`we have a new force user called ${ForceUserName}`);
    Humanoid.call(this, ForceUserName, species);
    this.forceSide = forceSide;
}

ForceUser.prototype = Object.create(Humanoid.prototype);

ForceUser.prototype.setForceSide = function(forceSide){
  console.log(`${this.cName}'s Force Side is ${this.forceSide}`);
}

ForceUser.prototype.useLightSaber = function (){
  console.log("I can use lightsaber");
}

ForceUser.prototype.massiveJump = function (){
  console.log("I can massive jump");
}

ForceUser.prototype.forceThrow = function (itemToThrow){
  this.itemToThrow = itemToThrow;
  console.log(`I will use the force to throw ${this.itemToThrow} at you`);
}
//DO THIS: use New to make a ForceUser
let Anakin = new ForceUser("Anakin","Human","Dark");
//DO THIS:  call sayHi() on your force user
Anakin.sayHi();
Anakin.whatSpecies("Human");
Anakin.setForceSide("Dark");
//DO THIS: call useLightSaber() on your force user
Anakin.useLightSaber();
//DO THIS: call massiveJump() on your force user
Anakin.massiveJump();
//DO THIS: call forceThrow(itemToThrow) on your force user
Anakin.forceThrow("a droid");
