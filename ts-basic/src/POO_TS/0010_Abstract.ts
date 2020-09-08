/**
 * Abstract é uma palavra para a classe mãe. Não posso usar new.
 * Classes filhas que extendem são chamadas de classes concretas
 */

export abstract class Character {
  protected abstract emoji: string;

  constructor(
    protected name: string,
    protected attack: number,
    protected life: number,
  ) {}

  attackCharacter(character: Character): void {
    console.log(
      `${this.emoji} ${this.name} losing lifing. Life: ${this.life}...`,
    );
    this.speakEffect();
    character.loseLife(this.attack);
  }

  loseLife(atkStrength: number): void {
    this.life -= atkStrength;
    this.speakEffect();
    console.log(
      `${this.emoji} ${this.name} losing lifing. Life: ${this.life}...`,
    );
  }

  abstract speakEffect(): void;
}

export class Warrior extends Character {
  protected emoji = '\u{1F9DD}';
  speakEffect(): void {
    console.log(this.emoji, 'Argh!');
  }
}
export class Monster extends Character {
  protected emoji = '\u{1F9DF}';

  speakEffect(): void {
    console.log(this.emoji, 'Warrior you a dead girl');
  }
}

const warrior = new Warrior('Maria', 100, 1000);
const monster = new Monster('Monster', 87, 1000);

warrior.attackCharacter(monster);
warrior.attackCharacter(monster);
monster.attackCharacter(warrior);
monster.attackCharacter(warrior);
monster.attackCharacter(warrior);
