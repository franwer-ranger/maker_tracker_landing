// Links from docs/DESIGN.md → Landing (app repo).
const repo = "https://github.com/franwer-ranger/maker_tracker";

export const links = {
  repo,
  docs: `${repo}/blob/main/docs/SELF_HOSTING.md`,
  license: `${repo}/blob/main/LICENSE`,
  cloneUrl: repo,
};

export const installCommands = [
  `git clone ${repo}`,
  "cd maker_tracker",
  "docker compose up -d --build",
];
