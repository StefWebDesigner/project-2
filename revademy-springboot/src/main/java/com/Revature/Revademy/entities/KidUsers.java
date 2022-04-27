package com.Revature.Revademy.entities;

import javax.persistence.*;

@Entity
public class KidUsers {
    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private Integer kidID;

    @Column
    private String kidNickName;

    @Enumerated
    @Column
    private BackgroundTypes backgroundTypes;

    @Enumerated
    @Column
    private AvatarTypes avatarTypes;

    @ManyToOne
    User user;

    public Integer getKidID() {
        return kidID;
    }

    public void setKidID(Integer kidID) {
        this.kidID = kidID;
    }

    public String getKidNickName() {
        return kidNickName;
    }

    public void setKidNickName(String kidNickName) {
        this.kidNickName = kidNickName;
    }

    public BackgroundTypes getBackgroundTypes() {
        return backgroundTypes;
    }

    public void setBackgroundTypes(BackgroundTypes backgroundTypes) {
        this.backgroundTypes = backgroundTypes;
    }

    public AvatarTypes getAvatarTypes() {
        return avatarTypes;
    }

    public void setAvatarTypes(AvatarTypes avatarTypes) {
        this.avatarTypes = avatarTypes;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
    
}
