package com.Revature.Revademy.entities;

import javax.persistence.*;

@Entity
@Table(name = "ContentModel")
public class Content {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer contentId;
    private String contentBody;

    public Integer getContentId() {
        return contentId;
    }

    public void setContentId(Integer contentId) {
        this.contentId = contentId;
    }

    public String getContentBody() {
        return contentBody;
    }

    public void setContentBody(String contentBody) {
        this.contentBody = contentBody;
    }
}
