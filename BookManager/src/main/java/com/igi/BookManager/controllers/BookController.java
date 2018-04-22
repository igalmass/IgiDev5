package com.igi.BookManager.controllers;

import com.igi.BookManager.entities.Book;
import com.igi.BookManager.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class BookController {
    @Autowired
    private BookRepository bookRepository;

    //http://localhost:8080/api/hello
    @GetMapping("/hello")
    public String sayHello(){
        return "Hello";
    }

    @GetMapping("/books")
    public List<Book> getBooks(){ return bookRepository.findAll();};

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
        return bookRepository.save(book);
    }

    @PostMapping("/book")
    public Book createBook(@RequestBody Book book){
        return bookRepository.save(book);
    }

}
