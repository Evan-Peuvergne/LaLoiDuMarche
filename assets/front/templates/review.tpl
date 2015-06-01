<div class="page page-review scroll not-horizontal">
	<div class="content">
		
		<div class="review-author">
			<img src="{{ review.image }}" alt="">
			<div class="overlay">
				<h2>{{ review.name }}</h2>
				<span class="date">{{ review.created }}</span>
			</div>
			<span class="note">{{ review.note }}</span>
		</div>

		<p class="review-content">
			<span>{{ review.note }}/5.</span>{{ review.content }}
		</p>

		<form action="#" class="review-response">
			<span>Your answer</span>
			<textarea id="" placeholder="Entrez votre réponse ici"></textarea>
			<input type="submit" value="Publier avec Facebook">
		</form>	

		<div class="review-responses">
			<span>Responses</span>

			{{#each responses}}
				<div class="response">
					<img src="//graph.facebook.com/{{ facebook_id }}/picture" alt="">
					<p><span>{{ name }}</span>{{ content }}</p>
				</div>
			{{else}}
				<p>Aucune réponse pour le moment</p>
			{{/each}}
		</div>

	</div>
</div>