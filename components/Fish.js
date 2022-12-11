AFRAME.registerComponent("fish", {
    init: function () {
      for (var i = 1; i <= 15; i++) {
        var id = `hurdle${i}`;
        const posX =Math.random() * 90 + -50      
        const posY = Math.random() * 3+40
        const posZ = Math.random() * 140
  
        var position = { x: posX, y: posY, z: posZ };
        this.createfish(id, position);
      }
    },
    createfish: (id, position) => {
      var islandEl = document.querySelector("#island");
      var fishEl = document.createElement("a-entity");
      fishEl.setAttribute("id", id);
      fishEl.setAttribute("position", position);
      fishEl.setAttribute("scale", { x: 0.3, y: 0.3, z: 0.3 });
      fishEl.setAttribute("gltf-model", "./assets/fish/scene.gltf");
      fishEl.setAttribute("animation-mixer", {});
      fishEl.setAttribute("static-body",{
        shape:"sphere",
        sphereRadius:5
      })

      fishEl.setAttribute("gameplay",{
        elementId:`#${id}`
      })
      islandEl.appendChild(fishEl);
    }
  });
  