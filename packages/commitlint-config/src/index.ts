/** ******************************************************
Function used to export the CommitLint configuration.
******************************************************* */
export const setCommitLintConfig = () => {
  return {
    extends: ["@commitlint/config-conventional", "@commitlint/config-lerna-scopes"],

    // Any rules defined below here will override rules from @commitlint/config-conventional
    rules: {
      "type-enum": [2, "always", ["feat", "fix", "docs", "style", "refactor", "perf", "test", "build", "ci", "chore", "revert"]],
      "subject-empty": [2, "never"],
      "subject-full-stop": [2, "always", "."],
      "subject-max-length": [2, "always", 72],
      "type-case": [2, "always", "lower-case"],
      "subject-case": [2, "always", "sentence-case"],
    },
  };
};
