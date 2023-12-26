<template>
 <div style="min-height: 70vh;"></div>
 <TheFooter />
</template>

<script>
import TheFooter from './layout/TheFooter.vue'
export default {
 components: {
  TheFooter
 }
}
</script>

<style>
@font-face {
 font-family: iranSanse;
 src: url("./fonts/IRANSans-web.woff") format("woff")
}

*,
body {
 font-family: iranSanse;
 direction: rtl;
 box-sizing: border-box;
 padding: 0;
 margin: 0;
 font-size: medium;
 text-align: justify;
 line-height: 2rem;
}

@media (max-width : 768px) {

 *,
 body {
  font-size: small;
 }

}
</style>