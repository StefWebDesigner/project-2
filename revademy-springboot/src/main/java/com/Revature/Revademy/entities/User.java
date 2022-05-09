package com.Revature.Revademy.entities;

import javax.persistence.*;
import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "UserModel")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String firstname;
    private String lastname;
    @Column(unique = true)
    private String username;
    @Enumerated(EnumType.STRING)
    private AccountTypes accountTypes;
    @Enumerated(EnumType.STRING)
    private AgeType ageType;
    @Enumerated(EnumType.STRING)
    private AvatarTypes avatarTypes;
    @Column(unique = true)
    private String email;
    private String password;
    private LocalDate createdDate;
    
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public AccountTypes getAccountTypes() {
        return accountTypes;
    }

    public void setAccountTypes(AccountTypes accountTypes) {
        this.accountTypes = accountTypes;
    }

    public AgeType getAgeType() {
        return ageType;
    }

    public void setAgeType(AgeType ageType) {
        this.ageType = ageType;
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

    public LocalDate getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(LocalDate createdDate) {
        this.createdDate = createdDate;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public AvatarTypes getAvatarTypes() {
        return avatarTypes;
    }

    public void setAvatarTypes(AvatarTypes avatarTypes) {
        this.avatarTypes = avatarTypes;
    }
}
