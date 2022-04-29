//Your Code here
let firstAnswer= window.prompt('You are at a crossroads. Do you go left or right?')
console.log(firstAnswer)
if(firstAnswer === 'left'){
    let secondAnswer = window.prompt('You come across a stray cat. You try to pet it (you are very friendly), but it runs off before you can. Do you FOLLOW it, or CONTINUE on your path?')

    if(secondAnswer.toLocaleLowerCase() === 'follow'){
        let thirdAnswer = window.prompt('You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.')
    
        if(thirdAnswer.toLocaleLowerCase() === 'stay'){
            window('You live happily amongst the cats for the rest of your days.')
        }
    }
} else if(firstAnswer === 'right'){
    let secondAnswer = window.prompt('You come across a snoring dragon. On the other side of him you see a chest of TREASURE. Another path would lead you AWAY from the dragon altogether. Which path do you take?')
}
