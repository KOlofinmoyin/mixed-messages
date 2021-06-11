# Mixed Messages app. 
![mixed-messages-gif](https://user-images.githubusercontent.com/33905131/121607788-93bc9d80-ca48-11eb-83e6-f86af6abc016.gif)


## Description:
A message generator program. 

## How It Works
1. Mixed Messages contains a CLI tool containing, 3 getter methods, 3 setter methods and 3 property methods.

2. Once the pre-requisite tools have been installed, clone this repo then navigate to the directory where its located and run the following command from the Command Line Interface: `node script.js`

3. The CLI tool will find corresponding component messages and construct a doodle card for you.

## Usage: 
Every time a user runs the program, they get a new, randomized output i.e. *fun doodle messages for the [`Doodle-buzz`] (https://www.amazon.co.uk/Professor-Puzzle-Doodle-Buzz-Quiz/dp/B07JN8KDDM) board game*. 

### Loading sample doodle cards for <br>
**who:**<br>
`doodle.addCard('who', 'Elvis');`

**what:**<br>
`doodle.addCard('what', 'break dancing');`

**where:**<br>
`doodle.addCard('where', 'at Buckingham Palace');`<br>

### Requesting a sample doodle card: <br>
`doodle.getRandomDoodle();`

## Conditions:
To make the program truly random, the message that it outputs is made up of three different pieces of data. 

### Project Objectives:
+ To build a message generator program using JavaScript
+ Use Git version control
+ Use command line

### Tests:

| Input         | Output       |
| :-----------  | -----------: |
| `doodle.getRandomDoodle()`        | `Elvis -- break dancing -- at Buckingham Palace`      |


### Tools employed:
+ Node
+ JavaScript
+ Git and GitHub
+ Command line
+ Project Tasks



