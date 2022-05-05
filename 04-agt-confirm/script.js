/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let age;
    let gender;
    let town;

    let confirmation = false;

    const askQuestions = () => {
        age = prompt("What's your age?");
        gender = prompt("What's your gender?");
        town = prompt("What's the town you're living in?");
    };

    do {
        askQuestions();
        confirmation = confirm("You are " + age + " years old, " + gender + " and you live in " + town + "?"); 
    } while (
        confirmation === false
    );

})();
