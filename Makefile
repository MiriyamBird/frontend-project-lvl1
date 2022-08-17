install: #install
	npm ci

brain-games: #game
	node bin/games/brain-games.js

publish: #publish
	npm publish --dry-run

lint: #lint
	npx eslint .

brain-even: #even
	node bin/games/brain-even.js	