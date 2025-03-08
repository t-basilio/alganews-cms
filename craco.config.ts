export const devServer = {
  port: 3001,
};

export const webpack = {
  configure: (config: { module: { rules: any; }; }) => {
    // ...
    const fileLoaderRule = getFileLoaderRule(config.module.rules);
    if (!fileLoaderRule) {
      throw new Error("File loader not found");
    }
    fileLoaderRule.exclude.push(/\.cjs$/);
    // ...
    return config;
  },
};

function getFileLoaderRule(rules: any) {
  for (const rule of rules) {
    if ("oneOf" in rule) {
      const found: any = getFileLoaderRule(rule.oneOf);
      if (found) {
        return found;
      }
    } else if (rule.test === undefined && rule.type === "asset/resource") {
      return rule;
    }
  }
}
