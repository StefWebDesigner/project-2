package com.Revature.Revademy.service;

import com.Revature.Revademy.entities.Report;
import com.Revature.Revademy.exception.NoReportFoundException;
import com.Revature.Revademy.repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReportService {

    private final ReportRepository reportRepository;

    @Autowired
    public ReportService(ReportRepository reportRepository) {
        this.reportRepository = reportRepository;
    }


    //TO POST A REPORT
//    http://localhost:8080/report/postreport
    public Report generateReport(Report report) {
        return reportRepository.save(report);
    }

    //TO GET ALL REPORTS
    public List<Report> getAllReport() {
        return reportRepository.findAll();
    }

//    public Optional<Report> getReportById(Integer caseId) {
//        Optional<Report> reportModel = reportRepository.findById(caseId);
//        if(reportModel.isPresent()) {
//           reportModel = reportRepository.findById(caseId);
//           return reportModel;
//        } else {
//            throw new NoReportFoundException("Can't match and find caseId");
//        }
//    }

    //TO GET A REPORT BY ID



    //TO GET DELETE A REPORT




}
