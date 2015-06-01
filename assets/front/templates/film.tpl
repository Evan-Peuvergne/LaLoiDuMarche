<div class="page page-film scroll">
	<div class="container">

		<div class="content animate fadeIn">
			
			<h1>Film</h1>

			<section>
				<h2>Synopsis</h2>
				<p>
					Thierry Taugourdeau, la cinquantaine, enchaine les formations sans avenirs et les rendez-vous à Pôle Emploi depuis qu'il a perdu son travail. Entre les traites de l'achat de la maison familiale et les frais de scolarités élevés de leur fils handicapé, Thierry et son épouse ne s'en sortent plus financièrement. Pris à la gorge, Thierry accepte un poste de vigile dans un supermarché. Il est bientôt confronté à des situations difficiles...
				</p>
			</section>

			<section>
				<h2>Infos</h2>
				{{#each informations}}
					<div class="info">
						<h3>{{ title }}</h3>
						<span>{{ value }}</span>
					</div>
				{{/each}}
				
			</section>

			<section>
				<h2>Casting</h2>
				<ul class="casting">
					{{#each actors}}
						<li class="actor">
							<div class="actor-thumb">
								<img src="{{ image }}" alt="">
								{{#if twitter}}
									<a href="{{twitter}}" class="overlay">
										<i class="icon-5"></i>
									</a>
								{{/if}}
							</div>
							<span class="actor-name">{{ name }}</span>
							<span class="actor-role">{{ role }}</span>
						</li>
					{{/each}}
				</ul>
			</section>

		</div>

		<div class="content-fixed animate fadeIn">
			
			<ul class="slider">
				{{#each photos}}
					<li style="background-image:url({{ url }});"></li>
				{{/each}}
			</ul>

			<div class="controls">
				<a href="#" class="previous"><i class="icon-8"></i></a>
				<a href="#" class="next"><i class="icon-10"></i></a>
			</div>

		</div>

	</div>
</div>