package com.skillstorm.training.day4.models;

public class Rectangle {
//challenge fully encapsulate rectangle class
	private double height;
	private double width;
	
	public Rectangle() {
		this.height = 5;		
	}
	
	public Rectangle(double height, double width) {
	this.height = height;
	this.width = width;
	}
	
	public double getHeight() {
		return this.height;
	}
	public void setHeight(double height) {
		this.height = height;
	}
	
	public double getWidth() {
		return this.width;
	}
	public void setWidth(double width) {
		this.width = width;
	}
}
