package com.skillstorm.training.day4.models;

public class Triangle extends Shape {

@Override
public String toString() {
return "This is a triangle with sharpness " + getSharpness();
}
private double height;
private double width;
private static String name;

public Triangle() {
	this.height = 1;
	this.width = 1;
	Triangle.name = "Triangle Rachel";
}
//getter for height
	public double getHeight() {
		return this.height;
	}

	// setter for height
	public void setHeight(double height) {
		if (height > 0)
			this.height = height;
	}

	// getter for height
	public double getWidth() {
		return this.width;
	}

	// setter for height
	// the this keyword is required when there is a name collision
	public void setWidth(double width) {
		if (width > 0)
			this.width = width;
	}
	
	// method to calculate the area of this 
	// the this keyword is optional when there are no name collisions
	public double getArea1() {
		return height * width/2;
	}

////////////////////////////////////////////////
////////////////// Methods /////////////////////

// Inherits the ability to eat and sleep from the Animal class

// Cats have the ability to climb
public void angle() {
System.out.println("Three angles sum to 180");
}

// Method overloading = method with the same name different parameters as another method in the same class
public void angle(String object) {
System.out.println("making angle big " + object);
}


public static String getName() {
	// TODO Auto-generated method stub
	return name;
}
}
