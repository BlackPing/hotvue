<template>
	<div class="error">
		<div class="content">
			<div class="inline-box title1">
				<span><i class="fas fa-exclamation-triangle"></i>Search Not Page</span>
			</div>
			<div class="inline-box right-text title2">
				<span>hotvue</span>
			</div>
			<hr/>
			<h1>찾으시는 페이지는 존재하지 않는 페이지 입니다.</h1>
			<p>자세한 사항은 관리자에게 문의하세요.</p>
			<router-link to="/">홈으로 이동하기.</router-link>
		</div>
	</div>
</template>

<style scoped lang="scss">
$error_height: 300px;
$content_width: 800px;
$content_height: 300px;

.error {
	width: 100%;
	height: $error_height;

	.content {
		color: black;
		text-align: left;
		width: $content_width;
		margin-top: calc(50vh - 150px);
		margin-left: calc(50vw - 400px);
		font-family: ELAND_Nice_M, sans-serif;
	}

	.title1 {
		width: 50%;
		text-align: left;
	}

	.title2 {
		width: 50%;
		text-align: right;
	}

	a {
		color: #2c3e50;
		text-decoration: none;
		&:hover {
			color: red;
		}
	}
}

@media screen and (max-width: 600px) /* 모바일 */
{
	$error_height: 300px;
	$content_width: 400px;
	$content_height: 150px;
	.error {
		width: 100%;
		height: $error_height;

		.content {
			color: black;
			text-align: left;
			width: $content_width;
			margin-top: 0;
			margin-left: 0;
			font-family: ELAND_Nice_M, sans-serif;
		}
	}
}
</style>
