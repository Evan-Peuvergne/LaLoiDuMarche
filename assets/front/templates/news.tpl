<div class="page page-news show scroll">
	<div class="container">
		<div class="content animate fadeIn">
			
			<h1>News</h1>

			<div class="news">

				{{#each news}}
					<article data-id="{{ id }}">
						<a href="#">
							<img src="{{ image }}" alt="">
							<h2>{{ title }}</h2>
							<span>{{ created }}</span>
						</a>
					</article>
				{{/each}}					

			</div>

		</div>
	</div>
</div>