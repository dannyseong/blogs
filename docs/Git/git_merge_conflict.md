# Merge conflict

## Basic Concept

If a file is edited by multiple branches, and one of these branches attempts to merge those changes, a `merge conflict` may occur. In this case, git pop up a message box to ask which branches have to be merged into main. The result of forced merge action is as follows:

```
<<<<<< HEAD
// Changes made in the current branch
==========
// Changes made in the branch being merged
>>>>>>
```

## How to resolve the conflict?

1. Review the conlicting changes and decide which ones to keep. You can keep one set of changes, discard both sets, or manually edit the content to combine the changes in a meaningful way.
2. Remove conflict marker `<<<<<< HEAD ~~ >>>>>>>`
3. After that, commit the file.

> Remeber to test your changes thoroughly after resolving the merge conflict to ensure that everything works as expected.
