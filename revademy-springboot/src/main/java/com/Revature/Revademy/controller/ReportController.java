package com.Revature.Revademy.controller;

import com.Revature.Revademy.entities.Report;
import com.Revature.Revademy.service.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(maxAge = 3600, origins = "")
@RequestMapping("/report")
public class ReportController {

    private final ReportService reportService;

    @Autowired
    public ReportController(ReportService reportService) {
        this.reportService = reportService;
    }

    //TO POST A REPORT
//    http://localhost:8080/report/postreport
    @RequestMapping(value = "/postreport", method = RequestMethod.POST)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Report> generateReport(@RequestBody Report report) {
        return ResponseEntity.ok(reportService.generateReport(report));
    }

    //TO GET ALL REPORTS
//    http://localhost:8080/report/all
    @RequestMapping(value = "/all", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<Report>> getAllReports() {
        return ResponseEntity.ok(reportService.getAllReport());
    }

    //TO GET A REPORT BY ID
    @RequestMapping(value = "/{caseId}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Report> getReportById(@PathVariable Integer caseId) {
        return ResponseEntity.ok(reportService.getReportById(caseId));
    }


    //TO GET DELETE A REPORT
//    http://localhost:8080/report/delete?caseId=9
    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<String> deleteReport(@RequestParam Integer caseId) {
        return ResponseEntity.ok(reportService.deleteReport(caseId));
    }

}