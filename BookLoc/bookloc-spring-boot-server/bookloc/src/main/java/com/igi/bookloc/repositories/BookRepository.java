package com.igi.bookloc.repositories;

import com.igi.bookloc.entities.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {

}
