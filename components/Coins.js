AFRAME.registerComponent("coins", {
    init: function () {
      for (var i = 1; i <= 25; i++) {
        const id = `coin${i}`;
   
        const posX =Math.random() * 100 + -50      
        const posY = Math.random() * 3+40
        const posZ = Math.random() * 120
  
        const position = { x: posX, y: posY, z: posZ };

        this.createCoins(id, position);
      }
    },
  
    createCoins: function(id, position) { 
      
      var treasureEl = document.querySelector("#island");
  
      var coinEl = document.createElement("a-entity");
  
      coinEl.setAttribute("id",id);
      coinEl.setAttribute("position",position);
      coinEl.setAttribute("scale", { x: 0.3, y: 0.3, z: 0.3 });
      
      coinEl.setAttribute("gltf-model", "./assets/coins/scene.gltf")
      
      coinEl.setAttribute("geometry",{ primitive: "circle",radius: 1 });  
      
      coinEl.setAttribute("animation",{
          property:"rotation",
          to:"0 360 0",
          loop:"true",
          dur:1000,
      })

      coinEl.setAttribute("static-body",{
        shape:"sphere",
        sphereRadius:5
      })

      coinEl.setAttribute("gameplay",{
        elementId:`#${id}`
      })
  
      treasureEl.appendChild(coinEl);
    }
  });