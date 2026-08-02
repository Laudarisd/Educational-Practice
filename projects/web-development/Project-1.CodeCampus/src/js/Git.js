import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Git.css'; // Import your Git CSS file here

function Git() {

    const navigate = useNavigate();
    const [showBackButton, setShowBackButton] = useState(false);
    let lastScrollY = window.scrollY;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < lastScrollY) {
                setShowBackButton(true); // Show button when scrolling up
            } else {
                setShowBackButton(false); // Hide button when scrolling down
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleBack = () => {
        navigate(-1); // Go back to the previous page
    };

    return (
        <div className="git-page">
            <button className="back-button" onClick={handleBack}>Back</button>
    
            {/* Introduction to Git */}
            <section className="git-intro">
                <h1>Git Tutorial</h1>
                <p>Welcome to the Git tutorial. Learn the basics of Git version control and how it can improve your coding workflow.</p>
            </section>
    
            {/* Git vs GitLab */}
            <section className="git-vs-gitlab">
                <h2>Difference Between Git and GitLab</h2>
                <p>Git is a version control system for tracking changes in computer files, while GitLab is a web-based Git repository hosting service.</p>
            </section>
    
            {/* Git Basics */}
            <section className="git-basics">
                <h2>Git Basics</h2>
                <p>Understand the fundamentals of Git, including installation and initial setup.</p>
                <pre><code>{`# Install Git
sudo apt-get install git
# Set up Git configuration
git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"`}</code></pre>

            </section>
    
            {/* Common Git Commands */}
            <section className="git-commands">
                <h2>Common Git Commands</h2>
                <p>Learn about basic Git commands like git init, git add, git commit, git push, git pull.</p>
                <pre><code>{`# Initialize a new Git repository
git init
# Add file to staging area
git add <filename>
# Commit changes
git commit -m "Commit message"
# Push changes to remote repository
git push
# Pull changes from remote repository
git pull`}</code></pre>
            </section>
    
            {/* Branching and Merging */}
            <section className="git-branching">
                <h2>Branching and Merging</h2>
                <p>Branching and merging are vital in Git for managing features and collaboration.</p>
                <pre><code>{`# Create a new branch
git branch <branch-name>
# Switch to the new branch
git checkout <branch-name>
# Merge branch into current branch
git merge <branch-name>`}</code></pre>
            </section>
    
            {/* Resolving Merge Conflicts */}
            <section className="git-merge-conflicts">
                <h2>Resolving Merge Conflicts</h2>
                <p>Conflicts occur when merging branches with competing changes. Learning to resolve them is an essential skill in using Git.</p>

                <h3>Understanding Merge Conflicts</h3>
                <p>
                    A merge conflict happens when Git cannot automatically resolve differences in code between two commits. Conflicts often occur when multiple developers make changes to the same line of code or when one developer edits a file and another developer deletes it.
                </p>

                <h3>How to Resolve Merge Conflicts</h3>
                <p>Follow these steps to resolve a merge conflict:</p>

                <ol>
                    <li>
                        <strong>Identify the Conflicted Files:</strong>
                        Use <code>git status</code> to list the files with conflicts.
                        <pre><code>{`git status`}</code></pre>
                    </li>
                    <li>
                        <strong>Edit the Conflicted Files:</strong>
                        Open the conflicted files in your code editor. Look for the lines marked with &lt;&lt;&lt;&lt;&lt;&lt;&lt;, =======, and &gt;&gt;&gt;&gt;&gt;&gt;&gt;. These markers define the conflicting changes from different branches.
                    </li>
                    <li>
                        <strong>Resolve the Conflicts:</strong>
                        Choose which changes to keep or edit the lines to merge the code manually. Remove the Git markers once you've resolved these conflicts.
                    </li>
                    <li>
                        <strong>Add and Commit the Resolved Files:</strong>
                        After resolving the conflicts, use <code>git add</code> to stage the changes and <code>git commit</code> to commit the resolved merge.
                        <pre><code>{`git add <file>
git commit -m "Resolved merge conflict"`}</code></pre>
                    </li>
                </ol>

                <h3>Best Practices</h3>
                <p>
                    Regularly pulling changes from the remote and communicating with your team can help minimize conflicts. Additionally, understanding the changes and context of both conflicting sides is crucial for effective resolution.
                </p>
            </section>

    
            {/* Working with Remote Repositories */}
            <section className="git-remotes">
                <h2>Working with Remote Repositories</h2>
                <p>Remote repositories enable collaboration on projects. Learn how to manage remotes.</p>
            <pre><code>{`# Add a remote repository
git remote add origin <remote-repo-url>
# View remote repositories
git remote -v
# Fetch changes from a remote repository
git fetch origin`}</code></pre>
            </section>
    
            {/* Advanced Git Techniques */}
            <section className="git-advanced">
                <h2>Advanced Git Techniques</h2>
                <p>Explore advanced Git techniques like rebase, stash, and cherry-picking, essential for sophisticated version control strategies.</p>
                
                <h3>Git Rebase</h3>
                <p>
                    Rebase is a powerful Git feature used to integrate changes from one branch into another. It's often used to maintain a clean and linear project history.
                </p>
                <pre><code>{`# Rebase your current branch onto the master branch
git rebase master`}</code></pre>
                <p>
                    Note: Rebasing rewrites history and should be used carefully, especially on shared branches.
                </p>

                <h3>Git Stash</h3>
                <p>
                    Stashing allows you to temporarily save modified and staged changes without committing them, to switch branches or pull updates.
                </p>
                <pre><code>{`# Stash changes in your working directory
git stash

# Apply the latest stash
git stash pop`}</code></pre>
                <p>
                    Stashes are useful for quickly switching context without committing half-done work.
                </p>

                <h3>Git Cherry-Picking</h3>
                <p>
                    Cherry-picking is used to apply changes from specific commits on another branch without merging the whole branch.
                </p>
                <pre><code>{`# Cherry-pick a commit to your current branch
git cherry-pick <commit-hash>`}</code></pre>
                <p>
                    This technique is handy for applying specific changes from one branch to another without merging all the changes.
                </p>

                <p>
                    Mastering these advanced techniques will significantly enhance your Git skills and enable you to manage complex workflows and situations more effectively.
                </p>
            </section>

    
            {/* Possible Errors and Solutions */}
            <section className="git-problems">
                <h2>Possible Errors and Solutions</h2>
                <p>Even experienced users can encounter issues in Git. Here are some common errors and their respective solutions.</p>

                <h3>1. Permission Denied Error</h3>
                <p><strong>Error:</strong> Permission denied (publickey).</p>
                <p><strong>Solution:</strong> This error occurs when SSH cannot authenticate your identity. Ensure that your SSH key is added to the SSH agent and associated with your Git account.</p>
                
                <h3>2. Merge Conflict</h3>
                <p><strong>Error:</strong> Conflict after a Git pull or merge.</p>
                <p><strong>Solution:</strong> Open the files with conflicts and manually resolve the differences. After editing, add and commit the resolved files. Use <code>git status</code> for assistance in locating these files.</p>
                
                <h3>3. Failed to Push Some Refs</h3>
                <p><strong>Error:</strong> Failed to push some refs to 'repository URL'.</p>
                <p><strong>Solution:</strong> This usually happens when your local branch is behind its remote counterpart. Use <code>git pull</code> to merge remote changes and then push again.</p>

                <h3>4. Branch Not Found</h3>
                <p><strong>Error:</strong> The specified branch does not exist.</p>
                <p><strong>Solution:</strong> Check for correct spelling of the branch name. Use <code>git branch -a</code> to list all branches if necessary.</p>

                <h3>5. Untracked Files Preventing Checkout</h3>
                <p><strong>Error:</strong> Cannot checkout branch - untracked working tree files would be overwritten.</p>
                <p><strong>Solution:</strong> Stash or commit your changes, or add the untracked files to .gitignore if they don't need to be versioned.</p>

                /* Additional Errors and Solutions */}
                <h3>6. Remote Repository Not Found</h3>
                <p><strong>Error:</strong> Repository not found or could not read from remote repository.</p>
                <p><strong>Solution:</strong> Verify the repository URL with <code>git remote -v</code>. Check your network connection and access rights to the repository.</p>

                <h3>7. Rejected Push due to Non-Fast-Forward Updates</h3>
                <p><strong>Error:</strong> Rejected - non-fast-forward.</p>
                <p><strong>Solution:</strong> Pull the latest changes from the remote and merge them with your local changes before pushing again. Use <code>git pull</code> followed by <code>git push</code>.</p>

                <h3>8. Git Ignore Not Working</h3>
                <p><strong>Error:</strong> Files listed in <code>.gitignore</code> are still being tracked.</p>
                <p><strong>Solution:</strong> Commit any outstanding changes, then run <code>git rm --cached [file]</code> to stop tracking the file.</p>

                <h3>9. Committing to the Wrong Branch</h3>
                <p><strong>Error:</strong> Accidentally made commits to the wrong branch.</p>
                <p><strong>Solution:</strong> Create a new branch from your current state, then reset the original branch to its previous state using <code>git reset</code> or <code>git checkout</code>.</p>

                <h3>10. Lost Commits or Branches</h3>
                <p><strong>Error:</strong> Accidentally deleted commits or branches.</p>
                <p><strong>Solution:</strong> Use <code>git reflog</code> to find the lost commits. You can then check out to a specific state or create a new branch from it.</p>
            </section>


            {/* Additional Resources */}
           <section className="git-resources">
                <h2>Additional Resources</h2>
                <p>Enhance your understanding of Git with these carefully selected external resources:</p>

                <ul>
                    <li><a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer">Official Git Documentation</a> - Comprehensive guide and reference to Git.</li>
                    <li><a href="https://github.com/git/git" target="_blank" rel="noopener noreferrer">Git GitHub Repository</a> - Explore the source code and contribute to the Git project.</li>
                    <li><a href="https://try.github.io/" target="_blank" rel="noopener noreferrer">Try Git</a> - Interactive Git tutorials to learn Git basics.</li>
                    <li><a href="https://www.atlassian.com/git/tutorials" target="_blank" rel="noopener noreferrer">Atlassian Git Tutorials</a> - Detailed tutorials covering various Git topics.</li>
                    <li><a href="https://www.udemy.com/topic/git/" target="_blank" rel="noopener noreferrer">Udemy Git Courses</a> - Various courses for learning Git at different levels.</li>
                    <li><a href="https://www.pluralsight.com/courses/how-git-works" target="_blank" rel="noopener noreferrer">Pluralsight - How Git Works</a> - A course that delves into the mechanics of Git.</li>
                    <li><a href="https://www.coursera.org/courses?query=git" target="_blank" rel="noopener noreferrer">Coursera Git Courses</a> - Broad range of Git courses for all levels.</li>
                    <li><a href="https://www.amazon.com/s?k=git+version+control+for+everyone&crid=3OE9D1R1OZJPU" target="_blank" rel="noopener noreferrer">Books on Amazon</a> - Find books about Git for all experience levels.</li>
                </ul>
            </section>

    
            {/* Conclusion */}
            <section className="git-conclusion">
                <h2>Conclusion</h2>
                <p>Mastering Git is essential for efficient version control and collaboration in software development.</p>
            </section>
        </div>
    );
    
    
}

export default Git;
