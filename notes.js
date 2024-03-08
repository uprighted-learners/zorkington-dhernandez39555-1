/*
    -for rooms we need a state machine to manage the change in rooms
    
    ! Core Gameplay Loop
    -FIRST some text to start game, giving them commands to do
    -THEN handle that input (if acceptable then do command else say no and ask again)
    -THEN provide feedback to user (i.e 'you stole the sign' or some description of room)

    -find some way to enter the building
    -tell user they are in x room and give description
    -give tools to solve puzzle (could be numbers for a keypad or a key to a door, etc)
    -once solved, move to next room
    -tell user they are in y room and give description
    -have user do something in the room

    *Inventory Story*
        needs a place to store items (use an array bc this is a list)
        push items into inventory , and remove items from our room (needs to be in a function so we can call it anytime)
            room:{
                desc: somekind,
                inventory: ["cheese", "a note written in blood","picture of Joe Biden"]
            }
            if player is in room 2 && our item is in room 2, then push(item) into player inventory and remove item from room inventory
        drop items into the room, and remove them from our inventory (need to be a function so we can call at anytime)

        need inventory display function

        lock/unlock doors -> manipulating state machine to add valid transitions
*/
        // function grabItem(item){
        //     if(rooms[currentRoom].inventory.includes(item)){
        //         playerInventory.push(item);
        //         //also remove from room inventory
        //         rooms[currentRoom].inventory.splice(item, 1)
        //     }
        // }
        // function dropItem(item){
        //     if(currentRoom.inventory.includes(item)){
        //         playerInventory.splice(item,1);
        //         currentRoom.inventory.push(item)
        //     }
        // }

        // let room1={
        //     desc:"string",
        //     inventory:[]
        // }
        // //call room1.desc

//example of state machine
let addedState="broken"
let trafficLightStates= {
    red: ["green"],
    green:["yellow"],
    yellow:["red"]
}
trafficLightStates.red.push(addedState)
// console.log(trafficLightStates.red)

let currentState = "green" //in Zorkington this will be reassigned A LOT


function changeCurrentState(input){ //changes currentState to value in argument
    currentState= input
    console.log(currentState)
}

function stateMachine(newState){ //standard state machine with minor error handling
    let validTransition= trafficLightStates[currentState]
    console.log(validTransition)
    if (validTransition.includes(newState)){
        currentState=newState;
        console.log(`You are in ${currentState}`)
    } else {
        console.log( `We cannot go to ${newState}`)
    }
}
changeCurrentState("red")

stateMachine("green")
stateMachine("yellow")
stateMachine("red")
stateMachine("yellow")