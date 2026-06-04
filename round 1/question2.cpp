//rotate k steps to the right 
#include <iostream>
#include <vector>
int main(){
    printf("Enter the size of the array: ");
    int n;
    scanf("%d", &n);
    std::vector<int> nums(n);
    printf("Enter the elements of the array: ");
    for(int i=0; i<n; i++){     
        scanf("%d", &nums[i]);
    }
    printf("Enter the number of steps to rotate: ");
    int k;      
    scanf("%d", &k);
    k = k % n; // Handle cases where k is greater than n    
for(int i=0; i<k; i++){
        int temp = nums[n-1]; // Store the last element
        for(int j=n-1; j>0; j--){
            nums[j] = nums[j-1]; // Shift elements to the right
        }
        nums[0] = temp; // Place the last element at the front
    }
    printf("Rotated array: ");
    for(int i=0; i<n; i++){
        printf("%d ", nums[i]);
    }
    return 0;
}