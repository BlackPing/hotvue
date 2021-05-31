<template>
	<div class="login">
		<div class="box">
			test
			<hr/>
		</div>
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
$error_height: 300px;
$content_width: 800px;
$content_height: 300px;
.login {
	.box {
		width: 800px;
		height: 300px;
		background: black;
	}
}
</style>