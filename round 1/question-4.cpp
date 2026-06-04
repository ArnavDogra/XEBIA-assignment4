//longest substring without repeating characters
#include <iostream>
#include <unordered_map>
#include <string>
int main() {
    std::string s;
    printf("Enter a string: ");
    std::getline(std::cin, s);
    
    std::unordered_map<char, int> charSet;
    int left = 0, maxLength = 0;

    for (int right = 0; right < s.length(); right++) {
        charSet[s[right]]++;
        while (charSet[s[right]] > 1) {
            charSet[s[left]]--;
            if (charSet[s[left]] == 0) {
                charSet.erase(s[left]);
            }
            left++;
        }
        maxLength = std::max(maxLength, right - left + 1);
    }

    printf("Length of the longest substring without repeating characters: %d\n", maxLength);
    return 0;
}