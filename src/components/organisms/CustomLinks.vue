<template>
  <div class="glassIcons">
    <a class="glassIco" href="#"><i class="fab fa-facebook-f"></i></a>
    <a class="glassIco" href="#"><i class="fab fa-instagram"></i></a>
    <a class="glassIco" href="#"><i class="fab fa-linkedin-in"></i></a>
    <a class="glassIco" href="#"><i class="fab fa-whatsapp"></i></a>
  </div>
</template>

<style scoped>
/* Flexbox centering */
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Reset styles */
html, body {
  padding: 0;
  margin: 0;
  height: 100%;
}

/* Main styles */
body {
  position: relative;
  background-image: linear-gradient(135deg, #f97794 10%, #623aa2 100%);
}

body:before {
  content: "";
  position: absolute;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(5px);
  z-index: -1;
}

/* GlassIcons container */
.glassIcons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20%;
  margin-bottom: 5%;
}

/* GlassIco styles */
.glassIco {
  --width: 70px;
  box-sizing: border-box;
  transition: 200ms;
  width: var(--width);
  height: var(--width);
  color: #fff;
  font-size: 30px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-right-color: rgba(255, 255, 255, 0.1);
  border-bottom-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-right: 30px; /* Add margin to separate icons */
  background: linear-gradient(135deg, #f97794 10%, #623aa2 100%);
}

/* Remove margin from last icon */
.glassIco:last-child {
  margin-right: 0;
}

.glassIco i {
  margin: 0;
}

.glassIco:before {
  content: "";
  position: absolute;
  display: block;
  width: 50%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  filter: blur(0px);
  transition: 400ms;
  transform: skewX(45deg) translateX(calc(var(--width) + 50%));
}

.glassIco:hover {
  transform: translateY(-20px);
}

.glassIco:hover:before {
  transform: skewX(45deg) translateX(calc(var(--width) * -1 - 50%));
}

.glassIco > * {
  opacity: 0.8;
}
</style>
