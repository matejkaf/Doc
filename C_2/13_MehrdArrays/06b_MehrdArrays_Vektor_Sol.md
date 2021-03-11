---
title: Mehrdimensionale Arrays
subtitle: Lösungen zu Vektorrechnung
tags: [assignment,c]
---



```c
#include <stdio.h>
#include <conio.h>

#define ZEILEN 3

int spur(int m[][ZEILEN],int n);
void hauptd(int m[][ZEILEN],int n);
void nebend(int m[][ZEILEN],int n);
void swapInt(int* a,int* b);
void fillMatrix(int matrix[][ZEILEN],int n);
void fillVector(int v[],int n);
void printMatrix(int matrix[][ZEILEN],int n);
void printVector(int v[],int n);
void transposeMatrix(int matrix[][ZEILEN],int n);
void mulMatVect(int m[][ZEILEN],int v1[],int v2[],int n);
void mulMatMat(int m1[][ZEILEN],int m2[][ZEILEN],int m3[][ZEILEN],int n);

void main()
{
	int matrix1[3][3]=
	{
		{1,2,3},
		{4,5,6},
		{7,8,9}
	};

    printf("\n=====================\n");
	printMatrix(matrix1,3);

	printf("Spur=%d\n",spur(matrix1,3));
	printf("Hauptdiagonale: ");
	hauptd(matrix1,3);
	printf("Nebendiagonale: ");
	nebend(matrix1,3);

    printf("\n=== Matrix*Vektor ===\n");
	int vector1[]={3,2,1};
	int vector2[3];
	mulMatVect(matrix1,vector1,vector2,3);
	printVector(vector2,3);

    printf("\n=== Matrix*Matrix ===\n");
	int matrix2[3][3]=
	{
		{1,3,-4},
		{1,3,-2},
		{-1,-2,5}
	};
	int matrix3[3][3]=
	{
		{8,3,0},
		{3,10,2},
		{0,2,6}
	};
	int matrix4[3][3];
	mulMatMat(matrix2,matrix3,matrix4,3);
    printMatrix(matrix4,3);

    printf("\n=== Transponieren ===\n");
	int matrix5[ZEILEN][ZEILEN];
	int matrix6[ZEILEN][ZEILEN];
	int vector[ZEILEN];
	int n=ZEILEN;

	fillMatrix(matrix5,n);
	fillMatrix(matrix6,n);
	fillVector(vector,n);
    printMatrix(matrix6,n);

    printf("–---------\n");
    transposeMatrix(matrix6,n);
    printMatrix(matrix6,n);
    printf("==================\n");

	getch();
}

int spur(int m[][ZEILEN],int n)
{
	int s=0;
	for(int i=0;i<n;i++)
		s+=m[i][i];
	return s;
}

void hauptd(int m[][ZEILEN],int n)
{
	for(int i=0;i<n;i++)
		printf("%d ",m[i][i]);
	printf("\n");
}

void nebend(int m[][ZEILEN],int n)
{
	for(int i=0;i<n;i++)
		printf("%d ",m[i][n-i-1]);
	printf("\n");
}

void swapInt(int* a,int* b)
{
	int c=*a;
	*a=*b;
	*b=c;
}

void fillVector(int v[],int n)
{
	int* p=&v[0];
	int* ende=p+n;
	int i=1;

	while(p<ende)
		*p++=i++;
}

void fillMatrix(int matrix[][ZEILEN],int n)
{
	int* p=&matrix[0][0];
	int* ende=p+n*n;
	int i=1;

	while(p<ende)
		*p++=i++;
}

void printMatrix(int matrix[][ZEILEN],int n)
{
	for(int i=0;i<n;i++)
	{
		for(int j=0;j<n;j++)
		{
			printf("%2d ",matrix[i][j]);
		}
		printf("\n");
	}
}

void printVector(int v[],int n)
{
	for(int i=0;i<n;i++)
		printf("%2d ",v[i]);
	printf("\n");
}

void mulMatVect(int m[][ZEILEN],int v1[],int v2[],int n)
{
	for(int i=0;i<n;i++)
	{
		v2[i]=0;
		for(int j=0;j<n;j++)
		{
			v2[i] += m[i][j]*v1[j];
		}
	}
}

void mulMatMat(int m1[][ZEILEN],int m2[][ZEILEN],int m3[][ZEILEN],int n)
{
	for(int i=0;i<n;i++)
	{
		for(int j=0;j<n;j++)
		{
			m3[i][j]=0;
			for(int k=0;k<n;k++)
			{
				m3[i][j] += m1[i][k]*m2[k][j];
			}
		}
	}
}

void transposeMatrix(int matrix[][ZEILEN],int n)
{
	for(int i=0;i<n-1;i++)
	{
		for(int j=i+1;j<n;j++)
		{
			swapInt(&matrix[i][j],&matrix[j][i]);
		}
	}
}
```





