package com.Revature.Revademy.service;

import com.Revature.Revademy.entities.Report;
import com.Revature.Revademy.repository.ReportRepository;
import org.omg.CORBA.PUBLIC_MEMBER;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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




    //TO GET A REPORT BY ID



    //TO GET DELETE A REPORT




}
