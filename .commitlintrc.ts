import { setCommitLintConfig } from "@repo/commitlint-config/src/index";
let commitLintConfig = setCommitLintConfig();
module.exports = {
    ...commitLintConfig
};
