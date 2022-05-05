package com.Revature.Revademy.entities;

import io.swagger.models.auth.In;

import javax.persistence.*;

@Entity
public class ReportStats {
    @Id
    @GeneratedValue( strategy = GenerationType.AUTO)
    private Integer reportStatId;
    private Integer totalFixedBugs;

    @OneToOne
    Report report;

    public Integer getReportStatId() {
        return reportStatId;
    }

    public void setReportStatId(Integer reportStatId) {
        this.reportStatId = reportStatId;
    }

    public Integer getTotalFixedBugs() {
        return totalFixedBugs;
    }

    public void setTotalFixedBugs(Integer totalFixedBugs) {
        this.totalFixedBugs = totalFixedBugs;
    }

    public Report getReport() {
        return report;
    }

    public void setReport(Report report) {
        this.report = report;
    }
}
