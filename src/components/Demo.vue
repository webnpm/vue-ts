<!--
 * @Author: 大蒙
 * @Date: 2023-05-19 15:10:15
 * @LastEditors: 大蒙
 * @LastEditTime: 2023-05-19 17:49:55
 * @FilePath: /vue3-ts/src/components/demo.vue
 * @Description: 
 * 
 * Copyright (c) 2023, All Rights Reserved. 
-->
<script setup lang="ts">
import { watchEffect } from "vue"

const { msg = "hello" } = defineProps(["msg"])

watchEffect(() => {
	// 在 watch 和 computed 中使用 msg
	// 能够正常收集依赖，就好像使用 props.msg
	console.log(`msg is: ${msg}`, import.meta.env)
})
</script>

<template>{{ msg }}</template>
