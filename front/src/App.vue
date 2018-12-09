<template>
  <div id="app">
    <div class="banner" md-elevation="0">
      <center>
        <span class="md-display-2 banner-title">
          EXO PLANETS
          <p class="md-subheading">A pursuit for new home</p>
        </span>
      </center>
      <center>
        <router-link to='search'>
          <md-button class="md-accent md-raised search"><md-icon>search</md-icon>  planets</md-button>
        </router-link>
      </center>
    </div>
    <canvas onload="draw_planets()" id="planets"></canvas>
    <main class="md-scrollbar">
      <router-view/>
    </main>
    <footer>
      <span class="md-headline"> Have something interesting to talk ? </span>
      <br>
      <md-button class="md-accent md-raised" href="https://rishabh3112.github.io/">Find me here</md-button>
    </footer>
  </div>
</template>

<style lang="css" scoped>
.banner{
  height: 400px;
  z-index: 0;
}
.md-icon-button {
  margin-bottom: 20px;
}
#planets{
  position: absolute;
  top: 0px;
  z-index: -1;
  width: 100%;
  height: 400px;
  background: url("./assets/space.png") #223344;
  background-position: top right;
  background-repeat: no-repeat; 
  background-attachment: fixed;
  animation: background 10s infinite ease-in-out; 
}
.search {
  position: absolute;
  top: 20px;
  left: 20px;
}
@keyframes background {
  0% {
    background-color: #223344;
  }
  50% {
    background-color: #222222;
  }
  100% {
    background-color: #223344;
  }
}
footer{
  padding: 50px 40px;
  width: 100%;
  background: #223344;
  animation: background 10s infinite ease-in-out; 
  height: 200px;
  color: white;
  position: relative;
  bottom: 0px;
}
.banner-title {
  position: relative;
  top: 200px;
  color: #ffffff;
}
main {
  z-index: 0;
  width: 90%;
  height: 90%;
  overflow: scroll;
  margin: 0 auto;
  margin-top: -50px;
  margin-bottom: 30px;
  padding: 20px;
  padding-top: 20px;
  background: #fefefe;
}

</style>


<script>
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

function setupCanvas(canvas) {
  
  var dpr = window.devicePixelRatio || 1;
  var rect = canvas.getBoundingClientRect();

  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;

  var ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  return ctx;
}

function draw_planets () {
  const canvas = document.getElementById("planets");
  const ctx = setupCanvas(canvas);
  const colors = [
    {
      light: "#adddfe",
      dark: "#443287"
    },
    {
      light: "#faddad",
      dark: "#873244",
    },
    {
      light: "#ddfaad",
      dark: "#226622",
    }
  ]
  console.log("Apples");
  class planets {
    light; dark; r;
    constructor(r){
      this.r = r;
      const colorSet = colors[Math.floor(Math.random()*(colors.length))]
      this.light = colorSet.light;
      this.dark = colorSet.dark;
      this.x = Math.floor(Math.random()*canvas.width)
      this.y = Math.floor(Math.random()*200)
    }
    
    draw() {
      let grad = ctx.createLinearGradient(0, 0, canvas.width, 300)
      grad.addColorStop(0,this.light)
      grad.addColorStop(1,this.dark)

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI, false);
      ctx.fill();
      
    }
  }

  for (let i = 0; i < 4; i++) {
    new planets(10*(i+1)).draw()
  }
}
export default {
  mounted: function () {
  this.$nextTick(function () {
    draw_planets();
  })
  },
}
</script>