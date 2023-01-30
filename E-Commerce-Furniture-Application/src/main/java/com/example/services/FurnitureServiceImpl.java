/*
 *Author Name : Seetha Lakshmi.G.M
 *Date : 12-12-2022
 *Created With : IntelliJ IDEA Community Edition
 */


package com.example.services;

import com.example.domain.Furniture;
import com.example.exception.CustomerExistsAlready;
import com.example.exception.CustomerNotFound;
import com.example.repository.FurnitureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FurnitureServiceImpl implements IFurnitureService {

    private FurnitureRepository furnitureRepository;

    @Autowired
    public FurnitureServiceImpl(FurnitureRepository furnitureRepository) {
        this.furnitureRepository = furnitureRepository;
    }

    @Override
    public Furniture saveFurniture(Furniture furniture) throws CustomerExistsAlready {
        if (furnitureRepository.findById(furniture.getFurnitureCode()).isPresent()) {
            throw new CustomerExistsAlready();
        }
        return furnitureRepository.save(furniture);
    }

    @Override
    public boolean deleteFurniture(int furnitureCode) throws CustomerNotFound {
        if (furnitureRepository.findById(furnitureCode).isEmpty()) {
            throw new CustomerNotFound();
        }
        furnitureRepository.deleteById(furnitureCode);
        return true;
    }

    @Override
    public List<Furniture> fetchAllFurniture() {
        return furnitureRepository.findAll();
    }

    @Override
    public Optional<Furniture> fetchFurnitureById(int furnitureCode) {
        return furnitureRepository.findById(furnitureCode);
    }

    @Override
    public Furniture updateFurnitureDetails(Furniture furniture, int furnitureCode) {
        Optional<Furniture> optUser = furnitureRepository.findById(furnitureCode);
        if (optUser.isEmpty()) {
            return null;
        }
        Furniture furniture1 = optUser.get();
        if (furniture.getFurnitureName() != null) {
            furniture1.setFurnitureName(furniture.getFurnitureName());
        }
        if (furniture.getFurnitureType() != null) {
            furniture1.setFurnitureType(furniture.getFurnitureType());
        }
        if (furniture.getFurnitureDescription() != null) {
            furniture1.setFurnitureDescription(furniture.getFurnitureDescription());
        }
        if (furniture.getFurniturePrice() != 0) {
            furniture1.setFurniturePrice(furniture.getFurniturePrice());
        }
        return furnitureRepository.save(furniture);
    }


    @Override
    public Furniture getByEmailAndPassword(String email, String password) {
        return furnitureRepository.findByEmailAndPassword(email, password);
    }
}