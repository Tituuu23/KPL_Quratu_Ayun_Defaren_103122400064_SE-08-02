function parseRobots(text) {
  const result = {
    agents: {},
    Sitemap: []
  };

  let currentAgent = null;
  const lines = text.split('\n');

  for (let rawLine of lines) {
    let line = rawLine.trim();

    if (!line || line.startsWith('#')) continue;

    const idx = line.indexOf(':');
    if (idx === -1) continue;

    const key = line.slice(0, idx).trim().toLowerCase();
    const value = line.slice(idx + 1).trim();

    if (key === 'user-agent') {
      currentAgent = value.toLowerCase();

      if (!result.agents[currentAgent]) {
        result.agents[currentAgent] = {
          Allow: [],
          Disallow: []
        };
      }

    } else if (key === 'allow') {
      if (currentAgent) {
        if (value === '') {
          result.agents[currentAgent].Allow.push('/');
        } else {
          result.agents[currentAgent].Allow.push(value);
        }
      }

    } else if (key === 'disallow') {
      if (currentAgent) {
        if (value === '') {
          if (key === 'allow') {
            if (currentAgent && value !== '') {
                result.agents[currentAgent].Allow.push(value);
            }
        }
        } else {
          result.agents[currentAgent].Disallow.push(value);
        }
      }

    } else if (key === 'sitemap') {
      result.Sitemap.push(value);

    } else if (key === 'host') {
      result.Host = value;
    }
  }

  return result;
}

module.exports = parseRobots;