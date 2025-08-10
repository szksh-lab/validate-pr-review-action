// base config.
// All configs like defaultConfig are merged with baseConfig.
const baseConfig = {
  trusted_apps: [
    "securefix-server",
    "renovate",
    "dependabot",
  ],
  untrusted_machine_users: [
    "readonly",
  ]
};

// Default config.
// The current default config is loose.
// TODO We will need to make this strict after migrating untrusted machine users and apps to trusted machine users and apps.
const defaultConfig = {
  trusted_apps: [
    "suzuki-shunsuke-app",
    "github-actions",
  ],
  untrusted_machine_users: [],
};

// Ideal config.
// In addition to the base config, some machine users are untrusted.
const idealConfig = {
  trusted_apps: [],
  untrusted_machine_users: [
    "*bot",
    "hoge-ci",
  ],
};

// Customize config for each repository
// The key is the repository name.
const customConfigs = {
  "foo": idealConfig,
  "bar": {
    trusted_apps: [
      "bar-ci",
    ],
    untrusted_machine_users: idealConfig.untrusted_machine_users,
  },
};

const returnConfig = (cfg) => ({
  trusted_apps: baseConfig.trusted_apps.concat(cfg.trusted_apps || []).join("\n"),
  untrusted_machine_users: baseConfig.untrusted_machine_users.concat(cfg.untrusted_machine_users || []).join("\n"),
});

const getRepo = () => {
  if (!process.env.GITHUB_REPOSITORY) {
    throw new Error("GITHUB_REPOSITORY environment variable is not set");
  }
  const arr = process.env.GITHUB_REPOSITORY.split("/");
  if (arr.length !== 2) {
    throw new Error(`GITHUB_REPOSITORY environment variable is invalid: ${process.env.GITHUB_REPOSITORY}`);
  }
  return arr[1];
};

module.exports = () => {
  return returnConfig(customConfigs[getRepo()] || defaultConfig);
};
