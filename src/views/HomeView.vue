
 <!-- <script src="js/jquery.js"></script>
 <script src="js/jquery.easing.1.3.js"></script>
 <script src="js/bootstrap.min.js"></script>
 <script src="js/jquery.fancybox.pack.js"></script>
 <script src="js/jquery.fancybox-media.js"></script> 
 <script src="js/portfolio/jquery.quicksand.js"></script>
 <script src="js/portfolio/setting.js"></script>
 <script src="js/jquery.flexslider.js"></script>
 <script src="js/animate.js"></script>
 <script src="js/custom.js"></script>
 <script src="js/owl-carousel/owl.carousel.js"></script> -->

<script setup lang ="ts">
import CustomHeader from "@/components/organisms/CustomHeader.vue"
import CustomContent from "@/components/organisms/CustomContent.vue"
import CustomFooter from "@/components/organisms/CustomFooter.vue"
import CustomFeatured from "@/components/organisms/CustomFeatured.vue"

</script>

<template>
  <main>
    
  <CustomHeader />

  <CustomFeatured />

	<CustomContent />

  <CustomFooter />

<a href="#" class="scrollup"><i class="fa fa-angle-up active"></i></a>
<!-- javascript
    ================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
  </main>
</template>
