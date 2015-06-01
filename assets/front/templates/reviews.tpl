<div class="page page-reviews scroll">
	<div class="container">

		<h1>Reviews</h1>

		<div class="reviews">

			{{#each reviews}}
				<a href="#" data-id="{{ id }}" class="review">
					<img src="{{ image }}" alt="">
					<div class="overlay">
						<span class="note">{{ note }}</span>
						<span class="name">{{ name }}</span>
					</div>
				</a>
			{{/each}}

		</div>

	</div>
</div>