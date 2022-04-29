package com.Revature.Revademy.entities;


import javax.persistence.*;

@Entity
@Table(name = "EmailSupportModel")
public class EmailSupport {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer emailId;
    private String emailSubject;
    private String emailBody;
    private String recpiantId;

    @OneToOne
    User user;

    public Integer getEmailId() {
        return emailId;
    }

    public void setEmailId(Integer emailId) {
        this.emailId = emailId;
    }

    public String getEmailSubject() {
        return emailSubject;
    }

    public void setEmailSubject(String emailSubject) {
        this.emailSubject = emailSubject;
    }

    public String getEmailBody() {
        return emailBody;
    }

    public void setEmailBody(String emailBody) {
        this.emailBody = emailBody;
    }

    public String getRecpiantId() {
        return recpiantId;
    }

    public void setRecpiantId(String recpiantId) {
        this.recpiantId = recpiantId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
