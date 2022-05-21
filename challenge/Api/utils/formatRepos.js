module.exports = (repos) => repos.map((repo) => ({
  title: repo.full_name,
  subtitle: repo.description,
  image: repo.owner.avatar_url,
  language: repo.language,
  createdAt: repo.created_at,
}));
