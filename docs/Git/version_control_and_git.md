# Version Control System and Git

- Version Control: A system that allows developers to track changes made to their code or files over time.
- Git: a distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

## Git Features

1. Distributed System: Unlike centralized version control systems, Git is distributed. Each developer working on a project has a complete copy of the repository, including the entire history of changes. This allows for offline work, easier branching, and faster operations.

2. Repositories: A Git repository is a folder that contains all the files and folders of a project, along with the version history. It resides both on the local machine of each developer and a remote server (like GitHub, GitLab, or Bitbucket) to facilitate collaboration.

3. Commits: In Git, a commit represents a snapshot of the project at a particular point in time. Each commit contains changes made since the last commit and includes a unique identifier (SHA-1 hash). Commits are the building blocks of the version history.

4. Branches: Git allows developers to create branches, which are separate lines of development. Branches are useful for experimenting, isolating features, and collaborating on specific tasks without affecting the main project.

5. Merging: After working on separate branches, developers can merge their changes back into the main branch (often called the "master" or "main" branch). Git intelligently combines the changes to ensure smooth integration.

6. Pull Requests: On Git hosting platforms like GitHub or GitLab, pull requests are used to propose changes from one branch to another. They facilitate code review and collaboration among team members.

7. Staging(Adding) Area: Git uses a staging area (also known as the "index") where changes are prepared before they are committed. This gives developers more control over which changes are included in a commit.

8. Tagging: Git supports tagging, which allows developers to mark specific points in history as important milestones, such as releases or versions.

## Git command flow

![Graph for git flow](https://cloudstudio.com.au/wp-content/uploads/2021/06/GitWorkflow-4-768x495.png)

## Git commands

| **Commands** | **Description and Examples**                                         |
| ------------ | -------------------------------------------------------------------- |
| git add      | Stage changes for next commit                                        |
|              | git add .                                                            |
|              | git add file_name                                                    |
|              | git add path_name                                                    |
| git commit   | Commit the staged snapshot to the local repository                   |
|              | git commit -m "commit message"                                       |
| git push     | Upload local repository content to a remote repository               |
|              | git push origin master                                               |
|              | git push -u origin local_branch_name                                 |
| git fetch    | Download content from remote repository, but doesn’t force the merge |
|              | git fetch origin master                                              |
| git merge    | Join two branches together                                           |
|              | git merge local_branch_name                                          |
|              | git merge local_branch_1 local_branch_2                              |
| git pull     | Combo of git fetch and git merge                                     |
|              | git pull                                                             |
|              | git pull origin remote_branch_name                                   |
