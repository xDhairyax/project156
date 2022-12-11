AFRAME.registerComponent("island-rotation",{
    schema:{
        speedofrotation:{type:"number",default:0}
    },
    
    init:function(){
        window.addEventListener("keydown",(e)=>{
            if(e.key==="ArrowRight"){
                if(this.data.speedofrotation<0.1){
                    this.data.speedofrotation+=0.1
                }
            }

            if(e.key==="ArrowLeft"){
                if(this.data.speedofrotation>0.1){
                    this.data.speedofrotation-=0.1
                }
            }
        })
    },

    tick:function(){
        mapRotation=this.el.getAttribute("rotation")
        mapRotation.y+=this.data.speedofrotation
        this.el.setAttribute("rotation",{
            x:mapRotation.x,
            y:mapRotation.y,
            z:mapRotation.z,
        })
    }
    
    })
    
    AFRAME.registerComponent("diver-rotation", {
        schema: {
          speedOfRotation: { type: "number", default: 0 },
          speedOfAscent: { type: "number", default: 0 }
        },

        init:function(){
            window.addEventListener("keydown",(e)=>{
    
            this.data.speedOfRotation = this.el.getAttribute("rotation")     
            this.data.speedOfAscent = this.el.getAttribute("position")
    
            var diverRotation = this.data.speedOfRotation
            var diverPosition = this.data.speedOfAscent
    
            if(e.key==="ArrowRight"){
                if(diverRotation.x<10){
                    diverRotation.x+=1
                    this.el.setAttribute("rotation",diverRotation)
                }
            }
    
            if(e.key==="ArrowLeft"){
                if(diverRotation.x>-10){
                    diverRotation.x-=1
                    this.el.setAttribute("rotation",diverRotation)
                }
            }
    
            if(e.key==="ArrowUp"){
                if(diverRotation.z<20){
                    diverRotation.z+=0.5
                    this.el.setAttribute("rotation",diverRotation)
                }
                if(diverPosition.y<2){
                    diverPosition.y+=1
                    this.el.setAttribute("position",diverPosition)
                }
            }
    
            if(e.key==="ArrowDown"){
                if(diverRotation.z>-10){
                    diverRotation.z-=0.5
                    this.el.setAttribute("rotation",diverRotation)
                }
                if(diverPosition.y>-2){
                    diverPosition.y-=1
                    this.el.setAttribute("position",diverPosition)
                }
            }
    
        })
        },

        tick:function(){
            var IsGameOver=this.el.getAttribute("game-play").IsGameOver
            if(IsGameOver){
              this.el.body.angularVelocity.set(0.1,0,0)
              const element=document.querySelector("#game_over_text")
              element.setAttribute("visible",true)
              return
            }
          }
    
    })