<template>
	<div class="login">
		<div class="box font-cafe">
			<h1 class="Login-title">Login</h1>
			<hr/>
			<div class="text-box">
				<i class="fas fa-user"></i><input type="text" placeholder="Username" name="" value="" />
			</div>
			<hr/>
			<div class="text-box">
				<i class="fas fa-key"></i><input type="password" placeholder="Password" name="" value="" />
			</div>
			<hr/>
			<input class="btn" type="button" name="" value="Sign in">
			<div class="font-elice right-text">회원가입</div>
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
$box_width: 300px;
$box_height: 300px;
.login {
	.box {
		width: $box_width;
		height: $box_height;
		margin-left: calc(50vw - 150px);
		margin-top: 200px;
	}
	.Login-title {
		text-align: left;
	}
	.text-box input {
		border: none;
		outline: none;
		background: none;
		color: whiye;
		font-size: 18px;
		width: 80%;
		margin: 0 10px;
	}

	.btn {
		width: 100%;
		background: none;
		border: 2px solid #2c3e50;
		padding: 5px;
		font-size: 18px;
		cursor: pointer;
		color: #2c3e50;
	}
}

@media screen and (max-width: 600px) /* 모바일 */
{
	$content_width: 400px;
	$content_height: 150px;
}
</style>