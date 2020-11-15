/**
 * Concrete class example
 */

/**
 * BAD Concrete exampl3
 */
class Animal_BAD_CONCRETE {
    public colour: Colour;
    public isHungry: boolean;

    constructor(colour: Colour, isHungry: boolean) {
        this.colour = colour;
        this.isHungry = isHungry;
    }

   // We're making a lot of assumptions about the type of
   // animal that this is going to be, with a lack of abstraction.
   // Do hamster's hunt? 🤔 (youtube that and let me know)
    hunt () : void {
        if (this.isHungry) {
            // Hunt so you can eat
        }
    }

    makeNoise (): string {
        return 'kwak kwa!!!';
    }
}

/**
 * Good Concrete / Complete concrete
 */

type Colour = 'blue' | 'red' | 'green';
enum HungerSkillLevel {
    Novice,
    Skilled,
    Master,
}

// Any class implementing this, be it an Animal, Person,
// Robot, etc.. needs to have these methods and properties.
interface IHunter {
    skillLevel: HungerSkillLevel,
    hunt (): void;
}

abstract class Animal_GOOD_CONCRETE {
    protected colour: Colour;

    constructor(colour: Colour) {
        this.colour = colour;
    }

    // makeNoise should be implemented by any Animal subclass
    abstract makeNoise (): string;
}

/**
 * Wolf concrete class.
 * 
 * The concrete class fully implements the requirements of the Animal abstract class
 * by implementing the makeNoise method.
 * 
 * It also fully implements the requirements of the IHunter interface by including
 * the HunterSkillLevel and implementing the hunt method
 */
class Wolf extends Animal_GOOD_CONCRETE implements IHunter {
    public skillLevel: HungerSkillLevel;

    constructor(colour: Colour, skillLevel: HungerSkillLevel) {
        super(colour);
        this.skillLevel = skillLevel;
    }

    hunt (): void {
        // hunt
    }

    makeNoise () : string {
        return 'Ambaaaaaaaar'
    }
}

const meanWolf = new Wolf('blue', HungerSkillLevel.Master);
const babyWolf = new Wolf('red', HungerSkillLevel.Novice);
console.log('Mean Wolf =>', meanWolf.makeNoise());
console.log('Baby Wolf =>', meanWolf.makeNoise());