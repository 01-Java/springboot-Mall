<script setup lang="ts">
import HomeCategory from "@/views/Home/components/HomeCategory.vue";
import HomeBanner from "@/views/Home/components/HomeBanner.vue";
import HomeNew from "@/views/Home/components/HomeNew.vue";
import HomeHot from "@/views/Home/components/HomeHot.vue";
import HomeProduct from "@/views/Home/components/HomeProduct.vue";
</script>
<template>
	<div class="container">
		<HomeCategory></HomeCategory>
		<HomeBanner></HomeBanner>
	</div>
	<HomeNew></HomeNew>
	<HomeHot></HomeHot>
	<HomeProduct></HomeProduct>
</template>
