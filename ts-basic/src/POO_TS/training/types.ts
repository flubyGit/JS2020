type Player = {
  name: string;
  talkNameInInterview: () => string;
};
type Sport = {
  sport: number;
  talkAgeSportAgo: () => number;
};
export type Team = {
  team: string;
  talkPlayningHereNow?: () => boolean;
};

class Combined implements Player, Sport, Team {
  constructor(public name: string, public sport: number, public team: string) {}
  talkPlayningHereNow?: (() => boolean) | undefined;

  talkAgeSportAgo(): number {
    return this.sport;
  }
  talkNameInInterview(): string {
    return this.name;
  }
}

const combined = new Combined('Felipe', 3, 'Barcelona');

console.log(combined);
