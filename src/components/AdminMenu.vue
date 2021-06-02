<template>
	<div>
		test
		test
		test
	</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
$box_width: 600px;
$box_height: 300px;
.menu {
	
}

@media screen and (max-width: 600px) /* 모바일 */
{
	$error_height: 300px;
	$content_width: 400px;
	$content_height: 150px;
}
</style>