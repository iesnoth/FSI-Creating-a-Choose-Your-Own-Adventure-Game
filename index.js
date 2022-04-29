//Your Code here
let firstAnswer= window.prompt('You are at a crossroads. Do you go left or right?')
console.log(firstAnswer)
if(firstAnswer === 'left'){
    let secondAnswer = window.prompt('You come across a stray cat. You try to pet it (you are very friendly), but it runs off before you can. Do you FOLLOW it, or CONTINUE on your path?')

    if(secondAnswer.toLocaleLowerCase() === 'follow'){
        let thirdAnswer = window.prompt('You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.')
    
        if(thirdAnswer.toLocaleLowerCase() === 'stay'){
            window.alert('You live happily amongst the cats for the rest of your days.')
        }
        else if(thirdAnswer.toLocaleLowerCase() === 'leave');{
            window.alert('After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.')
        }
    }
    if (secondAnswer.toLocaleLowerCase() === 'continue'){
        let thirdAnswer = window.prompt('You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take?')
    
        if(thirdAnswer.toLocaleLowerCase() === 'ladder'){
            window.alert('After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home.')
        }
        else if(thirdAnswer.toLocaleLowerCase() === 'staircase'){
            window.alert('After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.')
        }
    }
}

else if(firstAnswer === 'right');{
    let secondAnswer = window.prompt('You come across a snoring dragon. On the other side of him you see a chest of TREASURE. Another path would lead you AWAY from the dragon altogether. Which path do you take?')

    if(secondAnswer.toLocaleLowerCase()=== 'treasure'){
        let thirdAnswer = window.prompt('The dragon wakes up and sits upright. You only have a moment to respond, to STAY or RUN.')

        if(thirdAnswer.toLocaleLowerCase() === 'stay'){
            window.alert('You and the dragon have an uplifting conversation about local politics and become lifelong friends.')
        }
        else if(thirdAnswer.toLocaleLowerCase() === 'run');{
            window.alert('Quickly, you run back to the cave entrance. Sheepish, you return home.')
        }

    }
    else if(secondAnswer.toLocaleLowerCase()=== 'away');{
        let thirdAnswer = window.prompt('After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either DRAW it or PICK it. Which do you do?')

        if(thirdAnswer.toLocaleLowerCase() === 'draw'){
            window.alert('You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch.')
        }
        else if(thirdAnswer.toLocaleLowerCase() === 'pick'){
            window.alert('You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.')
        } 
    }

}
