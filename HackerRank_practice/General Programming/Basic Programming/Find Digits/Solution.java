// github.com/RodneyShag

static int findDigits(int num) {
    int count = 0;
    int n = num;
    while (n > 0) {
        int digit = n % 10;
        if (digit != 0 && num % digit == 0) {
            count++;
        }
        n /= 10;
    }
    return count;
}

// Discuss on HackerRank: https://www.hackerrank.com/challenges/find-digits/forum/comments/265470
