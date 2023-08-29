/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    const mappingGoal = {
        "G": "G",
        "()": "o",
        "(al)": "al",
    }
    const commandSplit = command.split("");
    let output = ""
    for(let i = 0; i< commandSplit.length; i++){
        if(commandSplit[i] === "G"){
            output += commandSplit[i];
            continue;
        }

        if(commandSplit[i] === "(" &&commandSplit[i+1] === ")"){
             output += "o";
             i++
            continue;
        }

         if(commandSplit[i] === "(" && commandSplit[i+1] === "a" && commandSplit[i+3] === ")"){
             output += "al";
             i+=3
            continue;
        }
    }

    return output
};

module.exports = interpret