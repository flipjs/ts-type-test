type AttackPoints = 10 | 30 | 50;

type Attack = (opponent: ComicBookCharacter, attackWith: AttackPoints) => void

type SuperHero = {
  kind: 'superhero',
  alias: string,
  health: number,
  identity: string,
  human: boolean,
  attack: Attack,
}

type SuperVillain = {
  kind: 'supervillain',
  alias: string,
  health: number,
  human: boolean,
  attack: Attack,
}

type ComicBookCharacter =
  | SuperHero
  | SuperVillain;

function attack(opponent: ComicBookCharacter, attackWith: AttackPoints) {
  opponent.health -= attackWith;
  console.log(`${opponent.alias} has been hith with ${attackWith} points!`);
  if (opponent.health <= 0) {
    console.log(`${opponent.alias} is dead!`);
  }
}

console.log('...and the battle begins!');

const superman: SuperHero = {
  kind: 'superhero',
  alias: 'Superman',
  health: 100,
  identity: "Clark Kent",
  human: false,
  attack,
}

const doomsday: SuperVillain = {
  kind: 'supervillain',
  alias: 'Doomsday',
  health: 100,
  human: false,
  attack,
}

const ultraman = {
  alias: 'Ultraman',
  health: 120,
  attack,
}

superman.attack(doomsday, 10);
doomsday.attack(superman, 30);
superman.attack(doomsday, 30);
doomsday.attack(superman, 30);
doomsday.attack(superman, 50);
ultraman.attack(doomsday, 30);
