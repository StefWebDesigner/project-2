package com.skillstorm.training.day4.models;

public class Shape {
////////////////////////////////////////////////
/////////////// Properties /////////////////////
private int sharpness; // 1 to 10


////////////////////////////////////////////////
/////////////// Constructors ///////////////////
public Shape() {
this.sharpness = 5; // initialize to be somewhat cute
}

public void Sharpness(int sharpness) {
this.sharpness = sharpness;
}

////////////////////////////////////////////////
/////////////// Getters/Setters ////////////////
public int getSharpness() {
return sharpness;
}

public void setSharpness(int sharpness) {
if (sharpness > 0 && sharpness <= 10)
this.sharpness = sharpness;
}

////////////////////////////////////////////////
/////////////// Overriding Methods /////////////
@Override
public String toString() {
return "This is a triangle with sharp angle " + sharpness;
}


////////////////////////////////////////////////
////////////////// Methods /////////////////////

public void make(String star) {
System.out.println("Making " + star);
}

public void roll() {
System.out.println("constructing polygon");
}
}
