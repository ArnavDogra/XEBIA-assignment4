#include<stdio.h>
#include<stdlib.h>
#include<string.h>

int main()
{
    int nums[5];

    for(int i=0;i<5;i++)
    {
        scanf("%d",&nums[i]);
    }

    int max1=nums[0];

    
    for(int i=1;i<5;i++)
    {
        if(nums[i]>max1)
        {
            max1=nums[i];
        }
    }

    int minDiff=1000000000;
    int max2=-1;

   
    for(int i=0;i<5;i++)
    {
        if(nums[i]!=max1)
        {
            int diff=max1-nums[i];

            if(diff<minDiff)
            {
                max2=nums[i];
                minDiff=diff;
            }
        }
    }

    printf("%d", max2);
    return 0;
}





