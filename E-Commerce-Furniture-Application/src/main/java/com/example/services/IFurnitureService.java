package com.example.services;

import com.example.domain.Furniture;
import com.example.exception.CustomerExistsAlready;
import com.example.exception.CustomerNotFound;

import java.util.List;
import java.util.Optional;

public interface IFurnitureService {
    Furniture saveFurniture(Furniture furniture) throws CustomerExistsAlready;

    boolean deleteFurniture(int furnitureCode) throws CustomerNotFound;

    List<Furniture> fetchAllFurniture();

    Optional<Furniture> fetchFurnitureById(int furnitureCode);

    Furniture updateFurnitureDetails(Furniture furniture, int furnitureCode);

    Furniture getByEmailAndPassword(String email, String password);


}
