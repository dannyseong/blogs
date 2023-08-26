# What is Git Flow?

Git Flow is a branching model for version control using the popular Git version control system. It is designed to **provide a structured and organised workflow for managing the development and release of software projects**.

> 💡Branch management strategy has another examples like github flow and gitlab flow.

## Key components of Git Flow

### 1. Main Branches

- **master**: a representation of the mainline or production-ready codebase. Code in the master branch should always be stable and deployable.
- **develop**: serves as an integration branch where feature are merged before being deployed to the master branch. It should also be relatively stable at all times.

### 2. Sopporting Branches

- **feature**: created for developing new features or enhancements. They are branched off from the develop branch and merged back into it when the feature is completed.
- **release**: used for preparing a new release. Once a release is ready, the release branch is merged into both the master and develop branches, and a version tag is added to the master branch.
- **hotfix**: created to address critical bugs or issues found in the production code. Hotfix branches are branched off from the master branch, and after fixing the issue, they are merged into both master and develop branches.

## Typical flow of using Git Flow

1. A `develop` branch is created from `master`.
2. A `release` branch is created from `develop`.
3. `feature` branches are created from `develop`.
4. When a `feature` is completed it is merged into the `develop`.
5. When a `release` is done, it is merged into the `develop` and `master`.
6. If an issue in `master` is detected, a `hotfix` branch is created from `master`
7. Once the `hotfix` is completed, it is merged into both `develop` and `master`

![Git flow](https://velog.velcdn.com/images%2Fseongwon97%2Fpost%2F5994c1a6-cdfd-4c73-84ea-842f9f7b001e%2Fimage.png)
