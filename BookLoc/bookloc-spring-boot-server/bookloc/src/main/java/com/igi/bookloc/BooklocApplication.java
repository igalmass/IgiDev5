package com.igi.bookloc;

import com.igi.bookloc.entities.Book;
import com.igi.bookloc.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BooklocApplication implements CommandLineRunner {

	@Autowired
	private BookRepository bookRepository;

	public static void main(String[] args) {
		SpringApplication.run(BooklocApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		bookRepository.save(new Book("Hawaii", "Very good hawaiii", 138));
		bookRepository.save(new Book("Caribbean", "Very good carib", 997));
		bookRepository.save(new Book("The last kingdom", "Very good uthred", 996));

	}
}
