"""
Due to a bug, there are many duplicate folders in a file system. You are given a 2D array paths, where paths[i] is an array representing an absolute path to the ith folder in the file system.

For example, ["one", "two", "three"] represents the path "/one/two/three".
Two folders (not necessarily on the same level) are identical if they contain the same non-empty set of identical subfolders and underlying subfolder structure. The folders do not need to be at the root level to be identical. If two or more folders are identical, then mark the folders as well as all their subfolders.

For example, folders "/a" and "/b" in the file structure below are identical. They (as well as their subfolders) should all be marked:
/a
/a/x
/a/x/y
/a/z
/b
/b/x
/b/x/y
/b/z
However, if the file structure also included the path "/b/w", then the folders "/a" and "/b" would not be identical. Note that "/a/x" and "/b/x" would still be considered identical even with the added folder.
Once all the identical folders and their subfolders have been marked, the file system will delete all of them. The file system only runs the deletion once, so any folders that become identical after the initial deletion are not deleted.

Return the 2D array ans containing the paths of the remaining folders after deleting all the marked folders. The paths may be returned in any order.
"""

from collections import defaultdict
from typing import List

class Solution:
    def deleteDuplicateFolder(self, paths: List[List[str]]) -> List[List[str]]:
        # Step 1: Build the folder tree
        root = {}
        for path in paths:
            curr = root
            for name in path:
                if name not in curr:
                    curr[name] = {}
                curr = curr[name]
        
        # Step 2: Serialize subtrees and find duplicates
        serial_map = defaultdict(list)
        
        def serialize(node):
            if not node:
                return ""
            # Sort children for deterministic serialization
            items = []
            for key in sorted(node.keys()):
                items.append(key + serialize(node[key]))
            serial = "(" + "".join(items) + ")"
            if serial != "()":  # Only non-empty subfolders
                serial_map[serial].append(node)
            return serial
        
        serialize(root)
        
        # Step 3: Mark duplicate subtrees
        duplicates = set()
        for nodes in serial_map.values():
            if len(nodes) > 1:
                for node in nodes:
                    duplicates.add(id(node))
        
        # Step 4: Prune duplicates and collect paths
        res = []
        def collect(node, path):
            for key in node:
                if id(node[key]) in duplicates:
                    continue
                collect(node[key], path + [key])
            if path:
                res.append(path)
        
        collect(root, [])
        return res



