package com.springboot.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.springboot.springboot.entity.GO;

public interface GORepo extends JpaRepository<GO,String> {
    @Modifying
    @Transactional
    @Query(value = "INSERT INTO go (go_number, pdf_file, date) VALUES (?1, ?2, ?3)", nativeQuery = true)
    void savePdf(String goNumber, byte[] pdfFile,String date);
}