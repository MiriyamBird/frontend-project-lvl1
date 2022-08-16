install: #install
	npm ci

brain-games: #game
	node bin/brain-games.js

publish: #publish
	npm publish --dry-run

lint: #lint
	npx eslint .

brain-even: #game
	node bin/brain-even.js	