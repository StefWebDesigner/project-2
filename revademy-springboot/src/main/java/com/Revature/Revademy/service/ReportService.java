package com.Revature.Revademy.service;

import com.Revature.Revademy.entities.Report;
import com.Revature.Revademy.repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReportService {

    private final ReportRepository reportRepository;

    @Autowired
    public ReportService(ReportRepository reportRepository) {
        this.reportRepository = reportRepository;
    }


    public Report generateReport(Report report) {
        return reportRepository.save(report);
    }

}
