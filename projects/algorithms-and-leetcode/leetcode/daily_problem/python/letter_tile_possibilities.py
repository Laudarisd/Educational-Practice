"""
You have n  tiles, where each tile has one letter tiles[i] printed on it.

Return the number of possible non-empty sequences of letters you can make using the letters printed on those tiles.

"""


class Solution:
    def numTilePossibilities(self, tiles: str) -> int:
        result = set()  # Use set to make result unique
        
        def backtrack(remaining_tiles, current_seq):
            if current_seq:  # If the current sequence is non-empty, add it to the set
                result.add(current_seq)
            
            for i in range(len(remaining_tiles)):
                # Skip duplicate tiles to avoid counting the same sequence multiple times
                if i > 0 and remaining_tiles[i] == remaining_tiles[i - 1]:
                    continue
                
                # Recur by adding this tile to the current sequence
                backtrack(remaining_tiles[:i] + remaining_tiles[i + 1:], current_seq + remaining_tiles[i])
        
        # Sort the tiles to help with duplicate skipping
        tiles = sorted(tiles)
        backtrack(tiles, "")
        
        return len(result)

                
        
        