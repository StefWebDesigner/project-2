package com.Revature.Revademy.entities;

import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.*;
import java.time.format.DateTimeFormatter;

@Entity
@Table(name = "ReportModel")
public class Report {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer caseId;
    @Enumerated(EnumType.STRING)
    private LocationTypes locationTypes;
    private String bugTitle;
    private String bugDescription;
    private StatusTypes statusTypes;


    public Integer getCaseId() {
        return caseId;
    }

    public void setCaseId(Integer caseId) {
        this.caseId = caseId;
    }

    public LocationTypes getLocationTypes() {
        return locationTypes;
    }

    public void setLocationTypes(LocationTypes locationTypes) {
        this.locationTypes = locationTypes;
    }

    public String getBugTitle() {
        return bugTitle;
    }

    public void setBugTitle(String bugTitle) {
        this.bugTitle = bugTitle;
    }

    public String getBugDescription() {
        return bugDescription;
    }

    public void setBugDescription(String bugDescription) {
        this.bugDescription = bugDescription;
    }

    public StatusTypes getStatusTypes() {
        return statusTypes;
    }

    public void setStatusTypes(StatusTypes statusTypes) {
        this.statusTypes = statusTypes;
    }
}


