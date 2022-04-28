package com.Revature.Revademy.service;

import com.Revature.Revademy.entities.Report;
import com.Revature.Revademy.exception.NoReportFoundException;
import com.Revature.Revademy.repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

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


    //TO GET A REPORT BY ID
//    public Report getReportById(Integer caseId) {
//        Optional<Report> report = reportRepository.findById(caseId);
//            return report.orElse(null);
//    }


    //TO GET DELETE A REPORT
    public String deleteReport(Integer caseId) {
        Optional<Report> report = reportRepository.findById(caseId);
        if(report.isPresent()) {
            reportRepository.deleteById(caseId);
            return "Report has been successfully deleted";
        }
        throw new NoReportFoundException("Couldn't find the case Id to delete");
    }




}
