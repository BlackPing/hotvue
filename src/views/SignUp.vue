<template>
	<div class="signup">
		<h1 class="title left-text font-elice">이용약관</h1>
		<div class="service left-text">
			<span>1. Service</span>
		</div>
		<div class="information left-text font-elice">
			<div class="text-box">
				<div class="text">이메일 <span class="red">*</span></div><input type="text" placeholder="E-mail" name="" value="" />
			</div>
			<div class="text-box">
				<div class="text">비밀번호 <span class="red">*</span></div><input type="password" placeholder="Password" name="" value="" />
			</div>
			<div class="text-box">
				<div class="text">비밀번호 확인 <span class="red">*</span></div><input type="password" placeholder="Password" name="" value="" />
			</div>
			<div class="information-check">
				<div class="check-box">
					<input type="checkbox" name="" /><div class="text"><span>회원가입 약관에 동의합니다. (필수)</span></div>
				</div>
				<div class="check-box">
					<input type="checkbox" name="" /><div class="text"><span>각종 이메일 수신에 동의합니다. (필수)</span></div>
				</div>
			</div>
			<input class="btn" type="button" name="" value="Sign up">
		</div>
	</div>
</template>

<script>
export default {
  name: 'SignUp',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
$box_width: 600px;
$box_height: 300px;
.signup {
	width: $box_width;
	margin-left: calc(50vw - 300px);
	.title {
		margin-top: 100px;
	}
	.service {
		width: $box_width;
		height: $box_height;
		border: 1px solid black;
	}
	.information {
		width: $box_width;
		height: $box_height;
		margin-top: 20px;

		.text-box input {
			border: 1px solid black;
			outline: none;
			background: none;
			color: whiye;
			font-size: 18px;
			width: 20%;
			margin: 0 10px;
		}
		.text {
			display: inline-block;
			width: 120px;
			margin-bottom: 10px;
		}

		.check-box {
			.text {
				width: 300px;
				margin-bottom: 0px;
			}
		}

		.information-check {
			margin-top: 30px;
		}

		.btn {
			margin-top: 30px;
			margin-left: 25%;
			width: 50%;
			background: none;
			border: 2px solid #2c3e50;
			padding: 5px;
			font-size: 18px;
			cursor: pointer;
			color: #2c3e50;
		}
	}
}

@media screen and (max-width: 600px) /* 모바일 */
{
	$error_height: 300px;
	$content_width: 400px;
	$content_height: 150px;
}
</style>