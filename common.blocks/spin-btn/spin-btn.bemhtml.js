block('spin-btn')(
	js()(true),
	tag()('ul'),
	content()(function() {
		return [
			{
				elem: 'item',
				content: [
					{
						elem: 'link',
						mods: {'green': true, 'round': true },
						content: [
							{
								elem: 'icon',
								content: this.ctx.icon
							},
							{
								elem: 'title',
								content: this.ctx.text	
							},
							{
								elem: 'hint',
								mods: { 'green': true },
								mix: { elem: 'link', mods: { 'round': true} },
								content: this.ctx.hint
							}
						]
					}
				]
			},
		]
	}),
	elem('item')(
		tag()('li')
	),
	elem('link')(
		tag()('a')
	)
);