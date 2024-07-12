package com.springboot.springboot.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class GO {

    @Id
    private String goNumber;

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] pdfFile;

    private String date;

    public GO() {
    }

    public GO(String goNumber, byte[] pdfFile,String date) {
        this.goNumber = goNumber;
        this.pdfFile = pdfFile;
        this.date=date;
    }

    public String getGoNumber() {
        return goNumber;
    }

    public void setGoNumber(String goNumber) {
        this.goNumber = goNumber;
    }

    public byte[] getPdfFile() {
        return pdfFile;
    }

    public void setPdfFile(byte[] pdfFile) {
        this.pdfFile = pdfFile;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    

}