/*
 *Author Name : Seetha Lakshmi.G.M
 *Date : 12-12-2022
 *Created With : IntelliJ IDEA Community Edition
 */


package com.example.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.StringJoiner;
@Document
public class Furniture {
    @Id
    private int furnitureCode;
    private String email;
    private String password;
    private String furnitureName;
    private String furnitureType;
    private String furnitureDescription;
    private double furniturePrice;
    private boolean isFurnitureAvailable;

    public Furniture() {
    }

    public Furniture(String email, String password, int furnitureCode, String furnitureName, String furnitureType, String furnitureDescription, double furniturePrice, boolean isFurnitureAvailable) {
        this.email = email;
        this.password = password;
        this.furnitureCode = furnitureCode;
        this.furnitureName = furnitureName;
        this.furnitureType = furnitureType;
        this.furnitureDescription = furnitureDescription;
        this.furniturePrice = furniturePrice;
        this.isFurnitureAvailable = isFurnitureAvailable;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getFurnitureCode() {
        return furnitureCode;
    }

    public void setFurnitureCode(int furnitureCode) {
        this.furnitureCode = furnitureCode;
    }

    public String getFurnitureName() {
        return furnitureName;
    }

    public void setFurnitureName(String furnitureName) {
        this.furnitureName = furnitureName;
    }

    public String getFurnitureType() {
        return furnitureType;
    }

    public void setFurnitureType(String furnitureType) {
        this.furnitureType = furnitureType;
    }

    public String getFurnitureDescription() {
        return furnitureDescription;
    }

    public void setFurnitureDescription(String furnitureDescription) {
        this.furnitureDescription = furnitureDescription;
    }

    public double getFurniturePrice() {
        return furniturePrice;
    }

    public void setFurniturePrice(double furniturePrice) {
        this.furniturePrice = furniturePrice;
    }

    public boolean isFurnitureAvailable() {
        return isFurnitureAvailable;
    }

    public void setFurnitureAvailable(boolean furnitureAvailable) {
        isFurnitureAvailable = furnitureAvailable;
    }
}