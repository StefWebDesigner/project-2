package com.Revature.Revademy.entities;


import javax.persistence.*;

@Entity
@Table(name = "EmailSupportModel")
public class EmailSupport {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer emailId;
    private String fromEmail;
    private String recipient;
    private String subject;
    private String body;
    private Integer previousMailId;

    public Integer getPreviousMailId() {
        return previousMailId;
    }

    public void setPreviousMailId(Integer previousMailId) {
        this.previousMailId = previousMailId;
    }

    public Integer getEmailId() {
        return emailId;
    }

    public void setEmailId(Integer emailId) {
        this.emailId = emailId;
    }

    public String getFromEmail() {
        return fromEmail;
    }

    public void setFromEmail(String fromEmail) {
        this.fromEmail = fromEmail;
    }

    public String getRecipient() {
        return recipient;
    }

    public void setRecipient(String recipient) {
        this.recipient = recipient;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }
}
