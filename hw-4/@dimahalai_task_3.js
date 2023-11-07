class Warrior{
    _level = 1;
    rangSystem = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];
    _rank = this.rangSystem[0];
    _experience = 100;
    _maxLevel = 100;
    maxExperience = 10000;
    _achievements = [];

    level() {
        return this._level;
    }

    rank() {
        return this._rank;
    }

    experience() {
        return this._experience;
    }

    achievements() {
        return this._achievements;
    }

    growing(){
        if (this._experience <= this.maxExperience && this._level !== this._maxLevel){
        this._level = Math.floor(this._experience / 100);
        this._rank = this.rangSystem[Math.floor(this._level / 10)]}
    }

    training([explaining, gotEXP, level]){
        if(this._level >= level){
            if (this._experience + gotEXP <= this.maxExperience){
            this._experience += gotEXP;}
            else{this._experience = 10000}
            this.growing();
            this._achievements.push(explaining);

            return explaining;
        }
        else return "Not strong enough";
    }



    battle(foeLevel){
        let diff = this._level - foeLevel;
        if (foeLevel < 1 || foeLevel > 100){
            return "Invalid level";
        }

        else if(Math.floor(foeLevel / 10) - Math.floor(this._level / 10) >= 1 && foeLevel - this._level >= 5){
            return "You've been defeated";
        }
        else if(diff === 0){
            if (this._experience <= this.maxExperience){
            this._experience += 10;
            this.growing(this._experience);}
            return "A good fight";
        }
        else if(diff === 1){
            if (this._experience <= this.maxExperience){
            this._experience += 5;
            this.growing(this._experience);}
            return "A good fight";
        }
        else if(diff < 1){
            if (this._experience <= this.maxExperience){
            this._experience += 20 * diff * diff;
            this.growing(this._experience);}
            return "An intense fight";
        }
        if (diff >= 2){
            return "Easy fight";
        }
    }
}
