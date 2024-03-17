<script setup lang="ts">
import AnmBackLines from "@/components/atoms/_AnmBackLines.vue";
</script>

<template>
<AnmBackLines />


<div class="portfolio-left">

<h2>Electrical engineering / Programming</h2>
<div class="electronics-programing">
- First year of Electrical Engineering at Faculty of Tehnical Sciences <br><br>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, id aperiam rerum, assumenda accusantium, magnam et numquam eaque pariatur culpa ullam. Non porro odit sint, architecto officia cumque aut exercitationem!
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus ipsa aliquid, suscipit nobis cupiditate, nesciunt error pariatur consequuntur quis sequi veritatis repellendus fugit odio vel beatae est vero dolorum voluptatum.
</div>

</div>

<!--     ---------- SPLIT ----------     -->



<div class="portfolio-right">

<h2>Freelancing and hobies</h2>
<div class="electronics-programing">
- Dancing and Music <br><br><br>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, fugiat commodi laborum eligendi nam alias ratione omnis laudantium! Dignissimos, corrupti ducimus! Voluptas ducimus dolores quaerat, aliquam aut temporibus consequatur reprehenderit.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, asperiores et iure cupiditate deleniti, nam, quidem molestiae nemo assumenda similique tempore? Nisi possimus quasi accusantium optio deserunt iure labore. Totam?
</div>

</div>


</template>
<!-- add a scroll bar if needed, for 2 sections? -->
<style scoped>
.portfolio-left {
    width: 40%;
    float: left;
}

.portfolio-right {
    width: 55%;
    float: right;
    padding-right: 15%;
    
}

.electronics-programing {
    font-size: 22px;
    color:aqua;
}

h2 {
    font-size: 26px;
    color:rgb(0, 110, 255);
}
</style>