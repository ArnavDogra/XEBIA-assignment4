//valid anagram 
#include <iostream>
#include <vector>   
#include <algorithm>
#include <string>
#include <unordered_map>
int main(){
    std::string s, t;
    printf("Enter the first string: ");
    std::getline(std::cin, s);
    printf("Enter the second string: ");
    std::getline(std::cin, t);
    
    if(s.length() != t.length()){
        printf("The strings are not anagrams.\n");
        return 0;
    }
    
    std::unordered_map<char, int> charCount;
    
    for(char c : s){
        charCount[c]++;
    }
    
    for(char c : t){
        charCount[c]--;
        if(charCount[c] < 0){
            printf("The strings are not anagrams.\n");
            return 0;
        }
    }
    
    printf("The strings are anagrams.\n");
    return 0;
}