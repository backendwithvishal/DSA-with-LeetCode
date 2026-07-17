class Solution {

    public int reverse(int x) {

        // Variable to store the reversed number
        int reverseNumber = 0;

        // Continue until all digits are processed
        while (x != 0) {

            // Get the last digit
            int lastDigit = x % 10;

            // Remove the last digit from x
            x = x / 10;

            // Check for positive overflow
            if (reverseNumber > Integer.MAX_VALUE / 10 ||
                (reverseNumber == Integer.MAX_VALUE / 10 && lastDigit > 7)) {
                return 0;
            }

            // Check for negative overflow
            if (reverseNumber < Integer.MIN_VALUE / 10 ||
                (reverseNumber == Integer.MIN_VALUE / 10 && lastDigit < -8)) {
                return 0;
            }

            // Add the extracted digit to the reversed number
            reverseNumber = reverseNumber * 10 + lastDigit;
        }

        // Return the reversed integer
        return reverseNumber;
    }
}