module.exports = {
	husky: {
		hooks: {
			'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
			'pre-commit': 'yarn test && lint-staged',
		},
	},
};