package com.igi.BookManager.repositories;

import com.igi.BookManager.entities.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}
