<div class="page page-article show scroll">

	<div class="container">

		<div class="content-fixed" style="background-image:url({{ article.image }});">
			
			<h1>{{ article.title }}</h1>

			<div class="article-infos">
				<span>{{ article.created }}</span>
				<span>{{ article.views }} views</span>
			</div>

		</div>


		<div class="content">
			
			{{{ article.content }}}

		</div>

	</div>
</div>