import java.util.*;
class MaxMinarr {
    public static void main(String[] args){
  int min,max;
  int arr[]=new int [10];
Scanner sc=new Scanner(System.in);
System.out.println("enter the array elemnts");
for(int i=0;i<arr.length;i++)
{
  arr[i]=sc.nextInt();
}

max=arr[0];
min=arr[0];
for(int i=0;i<arr.length;i++){
  if(arr[i]>max)
  max=arr[i];
}
for(int i=0;i<arr.length;i++){
  if(arr[i]<min)
  min=arr[i];
}
System.out.println("maxmium in array");
System.out.println(max);
System.out.println("minimum in array");
System.out.println(min);

    }
}
