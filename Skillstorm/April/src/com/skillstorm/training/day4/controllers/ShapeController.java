package com.skillstorm.training.day4.controllers;
import com.skillstorm.training.day4.models.*;

public class ShapeController {

	public static void main(String[] args) {
System.out.println("Triangle shape has a name " + Triangle.getName());
		
		
		// Creating shape triangle
		
		Shape s = new Shape();
		System.out.println(s);

		Triangle t = new Triangle();
		//System.out.println(t.getArea1());
		t.setHeight(1);
		System.out.println("The height is " + t.getHeight());
		
		double area = t.getArea1();
		System.out.println("The area is " + area);


		// Calling the inherited methods in triangle
		System.out.println();
		System.out.println(Triangle.getName() + " is ");
		t.roll();
		t.make("triangle");
		
		// Calling the triangle specific methods
		t.angle();
		//t.say("triangle");
	

		// Calling the inherited methods in triangle  and the triangle specific methods
		System.out.println();
		System.out.println("t is called ");
		System.out.println(t.getName());
//		System.out.println(t.getClass().toString().split("\\.")[5]);

	
		

		
	}

	}


