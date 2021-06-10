
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

        return `${who.phrase} - ${what.phrase}, ${where.phrase}.`;
    },
}

//Tests:
// console.log(doodle._doodle.who)
// console.log(doodle._doodle.what)
// console.log(doodle._doodle.where)
// console.log(doodle.who)
// console.log(doodle.what)
// console.log(doodle.where)
// console.log(doodle.doodle)
// console.log(doodle.addCard('who', 'Bill Gates'))
// console.log(doodle.addCard('what', 'Sweeping the streets'))
// console.log(doodle.addCard('where', 'in Bangladesh'))
// console.log(doodle.getRandomCard('who'))
// console.log(doodle.getRandomDoodle());