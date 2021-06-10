
doodle = {
    _doodle:{
        who:[], 
        what:[],
        where:[]
        },
    get doodle(){
        return {
            who: this.who,
            what: this.what,
            where: this.where
        }
    },
    get who(){
        return this._doodle.who;
        },
    set who(subject){
    this._doodle.who = subject;
    },
    get what(){
    return this._doodle.what;
    }, 
    set what(predicate){
    this._doodle.what = predicate;
    },
    get where(){
    return this._doodle.where;
    },
    set where(location){
        this._doodle.where = location;
    },
    addCard: function(cardType, cardPhrase){
        const card = {
            phrase: cardPhrase
        }
        return this._doodle[cardType].push(card);
    },
    getRandomCard: function(cardType){
        const cards = this._doodle[cardType];
        const randomIndex = Math.floor(Math.random() *  cards.length);
        return cards[randomIndex];
      },
    getRandomDoodle: function(){
        const who = this.getRandomCard('who');
        const what = this.getRandomCard('what');
        const where = this.getRandomCard('where');

        return `${who.phrase} -- ${what.phrase} -- ${where.phrase}.`;
    },
}

//Tests:
// doodle._doodle.who)
// doodle._doodle.what)
// doodle._doodle.where)
// doodle.who)
// doodle.what)
// doodle.where)
// doodle.doodle)

//Add sample doodle cards:
doodle.addCard('who', 'Bill Gates');
doodle.addCard('who', 'A baby');
doodle.addCard('who', 'Elvis');
doodle.addCard('who', 'Desmond Tutu');
doodle.addCard('who', 'Mathilda');
doodle.addCard('what', 'sweeping');
doodle.addCard('what', 'stroking a cat');
doodle.addCard('what', 'holding a flower');
doodle.addCard('what', 'break dancing');
doodle.addCard('what', 'driving a Lambourghini');
doodle.addCard('where', 'in Bangladesh');
doodle.addCard('where', 'on the football pitch');
doodle.addCard('where', 'at Buckingham Palace');
doodle.addCard('where', 'in Mushin');
doodle.addCard('where', 'in the sea');

//Call the #getRandomDoodle() method
console.log(doodle.getRandomDoodle());