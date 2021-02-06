class Game {
  constructor(){
    
  }
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

   async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value")
      if( playerCountRef.exists()){
      playerCount = playerCountRef.val()
    player.getCount()
      }
      form = new Form()
      form.display();
    }
    
  }
  play(){
    form.hide()
    textSize(30)
    text("game start", 120,300 )
   Player.getPlayerInfo()
   if(allPlayers !== undefined){
     
     var ypos = 130
     for(var plr in allPlayers){

     
     ypos += 20
     textSize(20)
     text(allPlayers[plr].name + ":"+allPlayers[plr].distance , 120 , ypos )
    }

   }
  }
}
