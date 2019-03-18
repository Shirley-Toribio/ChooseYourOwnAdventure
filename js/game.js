// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You wake up in an unfamiliar room",
            choices: [
                {
                    text: "Approach door",
                    nextLevel: "Left",
                },

                {
                    text: "Stay in bed",
                    nextLevel: "Stayed",
                },
            ]
        },

        left: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "It opens and a bell rings! You come across a hallway",
            choices: [
                {
                    text: "go back to room",
                    nextLevel: "Start Over",
                },
                {
                    text:"Turn left",
                    nextLevel: "GuyInside"
                },
                {
                    text:"turn right",
                    nextLevel:"Window"
                },
            ]
        },

        GuyInside: {
            message: "You run into some guy! What do you do?",
            choices: [
                {
                    text: "Fight him",
                    nextLevel: "Escape",
                },
                {
                    text:"Run!",
                    nextLevel:"Caught4money"
                }
            ]
        },
        Window:{
            message:'You come across a window that leads to the outside! Steps are coming behind you',
            choices:[
                {
                    text:"Stay",
                    nextLevel:""
                },
                {
                    text:"Break",
                    nextLevel:"GetAwayDarn",
                }
                ]
        },
        Stayed:{
            message:"The house stays still. No one is inside. You can still leave",
            Choices:[
                {
                   text:"Walk Out Door",
                   nextLevel:"LateStartOver"
                },
                {
                    text:"Stay",
                    nextLevel:"SleepStartOver",
                }
                ]
        }
        

    }
};
