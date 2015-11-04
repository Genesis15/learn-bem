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
								elem: 'title',
								content: '&#128222;'	
							},
							{
								elem: 'hint',
								mods: { 'green': true },
								mix: { elem: 'link', mods: { 'round': true} },
								content: 'Менеджер ответит через 30 сек.'
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