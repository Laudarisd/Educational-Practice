class Solution:
    def isCircularSentence(self, sentence: str) -> bool:
            return sentence[0] == sentence[-1] and all(sentence[i-1] == sentence[i+1]for i in range(len(sentence)) if sentence[i] == ' ')
