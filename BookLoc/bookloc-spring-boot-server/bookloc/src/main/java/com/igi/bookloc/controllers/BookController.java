package com.igi.bookloc.controllers;

import com.igi.bookloc.entities.Book;
import com.igi.bookloc.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200", allowedHeaders = "*")
public class BookController {
    private BookRepository bookRepository;

    public BookController(@Autowired BookRepository bookRepository){
        this.bookRepository = bookRepository;
    }

    @GetMapping("/hello")
    public String sayHello(){
        return "Hellooooo";
    }

    @GetMapping("/books")
    public List<Book> getBooks() {
        return bookRepository.findAll();
    }

    @GetMapping("/book/{id}")
    public Book getBook(@PathVariable Long id){
        return this.bookRepository.findById(id).get();
    }

    @DeleteMapping("/book/{id}")
    public boolean deleteBook(@PathVariable Long id){
        this.bookRepository.deleteById(id);
        return true;
    }

    @PutMapping("/book")
    public Book updateBook(@RequestBody Book book){
        return this.bookRepository.save(book);
    }

    @PostMapping("/book")
    public Book createBook(@RequestBody Book book){
        return this.bookRepository.save(book);
    }

}
