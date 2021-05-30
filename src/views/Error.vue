<template>
	<div class="error">
		<div class="content">
			<span>✋Search Not Page</span>
			<hr/>
			<h1>찾으시는 페이지는 존재하지 않는 페이지 입니다.</h1>
			<p>자세한 사항은 관리자에게 문의하세요.</p>
		</div>
	</div>
</template>

<style lang="scss">
$error_height: 300px;
$content_width: 800px;
$content_height: 300px;
.error {
	width: 100%;
	height: $error_height;

	.content {
		text-align: left;
		width: $content_width;
		margin-top: calc(50vh - 150px);
		margin-left: calc(50vw - 400px);
	}

	span {
		text-align: left;
	}
}
</style>
