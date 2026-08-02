# External Data and Artifacts

This repository keeps source code, configuration, documentation, schemas, and small
examples in Git. Full datasets, model weights, checkpoints, archives, compiled
binaries, generated builds, videos, and large media are excluded.

Removed files are listed in `EXCLUDED_ARTIFACTS.tsv` with their source repository,
original byte size, and source-relative path. Before a removed file is required by a
published example, add:

- a stable download URL;
- the artifact version;
- a SHA-256 checksum;
- its expected local destination;
- its license or usage restrictions.

Recommended storage includes GitHub Releases, Hugging Face, Kaggle, Zenodo, or an
institutional object store. Never commit credentials or expiring private URLs.

## Additional exclusions during publication

Large Hacker News CSV exports, reinforcement-learning result JSON, course PDFs, and
generated video outputs were omitted. Use the original course/tutorial sources or
rerun the corresponding exercises to recreate them locally.
