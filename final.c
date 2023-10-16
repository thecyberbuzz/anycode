
#include<stdio.h>           //header files
#include<stdlib.h>
#include<time.h>
                                  //swapping function
void swap(int *x,int *y)         //swapping of elements
{
    int _temp = *x;
    *x = *y;
    *y = _temp;

}

int partition(int A2[],int low,int high,int *comp_quick)    //Partition function
{
      int pivot = A2[high];   //pivot ,taking as last element
      int i= low;         

      for(int k=low;k<=high-1;k++)
      {
          (*comp_quick)++;

          if(A2[k]<=pivot)    //if element is smaller than or equal to pivot
          {
            swap(&A2[i], &A2[k]);
            i++;
          }
      }

      swap(&A2[i],&A2[high]);
      return i;

}

int partition_random(int A2[],int low,int high,int *comp_quick)   //generates random pivot
{
    int random_function=(rand() %(high+1-low)) + low;    //Random function generator

    swap(&A2[random_function],&A2[high]);   //swap
    return partition(A2,low,high,comp_quick);   //calls the partition function
}


void Quick_sort(int A2[],int low,int high,int *comp_quick)   //quick sort function
{
       if(low<high)
       {
        int partioning_index=partition_random(A2,low,high,comp_quick);  //calls the random function and store it in a variable
        Quick_sort(A2,low,(partioning_index-1),comp_quick);
        Quick_sort(A2,(partioning_index+1),high,comp_quick);
       }
}

int insertion_sort(int A1[],int *comp_insert,int size)    //insertion sort
{
    int comparisons=0;

    for(int k=0;k<size;k++)
    {
        int key=A1[k];                             
        int m=k-1;
        

        while(m>=0 && A1[m] > key)
        {
             comparisons=(comparisons+1);   //number of comparisons

            A1[m+1]=A1[m];
            m--;
        }

        A1[m+1]=key;
    }

    if(comparisons==0)
    {
        comparisons=size-1;
    }

    *comp_insert=comparisons;
}

int main()
{

    srand(time(0));
    const char *file_input[]={"sorted.txt","reverse.txt","AlmostSorted.txt"};   

    for(int k=0;k<3;k++)            //loop for reading 3 txt files
    {
        FILE *file=fopen(file_input[k],"r");   
  
        if(file==NULL)
        {
            printf("Empty File");
            return -1;
        }
    

    int A1[10000];   //Array implementation
    int A2[10000];
    int number;

    for(int i=0;i<10000;i++)
    {                               //copying from txt file to A1
        fscanf(file,"%d",&A1[i]);  //copying of A1 into A2
        A2[i]=A1[i];
        
    }
 

    fclose(file);

    int comp_insert=0;                 //insertion sort
    insertion_sort(A1,&comp_insert,10000);

    int comp_quick=0;
    Quick_sort(A2,0,9999,&comp_quick);  //quick sort

    printf("Comparisons by:\t Insertion_sort\t & \t Rand_quick_sort\n");   //print as instructed

    printf("%s \t c_insert_sorted %d \t c_quick_sorted %d\n",file_input[k],comp_insert,comp_quick);

    printf("\n");

    }
    return 0;
}